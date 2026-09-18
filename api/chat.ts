import type { VercelRequest, VercelResponse } from '@vercel/node'
import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const MAX_MESSAGE_LENGTH = 500
const RATE_LIMIT_WINDOW_MS = 15 * 60_000
const RATE_LIMIT_MAX_REQUESTS = 6

const ipRequestMap = new Map<string, { count: number; resetAt: number }>()

function fetchCV(): string {
  return fs.readFileSync(path.join(process.cwd(), 'public', 'cv.txt'), 'utf-8')
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = ipRequestMap.get(ip)
  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return false
  entry.count++
  return true
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please wait a minute.' })
  }

  const { message } = req.body as { message?: string }
  if (!message?.trim()) {
    return res.status(400).json({ error: 'message is required' })
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `Message too long (max ${MAX_MESSAGE_LENGTH} characters).` })
  }

  let cvText: string
  try {
    cvText = fetchCV()
  } catch {
    return res.status(503).json({ error: 'Could not load CV at this time.' })
  }

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 512,
    system: `You are a helpful assistant on Gábor Deutsch's portfolio website. Answer questions about Gábor based ONLY on the CV below. If the answer is not in the CV, say you don't have that information. Be concise and friendly. Respond in the same language the user writes in.

CV:
${cvText}`,
    messages: [{ role: 'user', content: message }],
  })

  const answer = (response.content[0] as { type: string; text: string }).text
  return res.status(200).json({ answer })
}

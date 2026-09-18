import type { VercelRequest, VercelResponse } from '@vercel/node'
import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function fetchCV(): string {
  return fs.readFileSync(path.join(process.cwd(), 'public', 'cv.txt'), 'utf-8')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { message } = req.body as { message?: string }
  if (!message?.trim()) {
    return res.status(400).json({ error: 'message is required' })
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

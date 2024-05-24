FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
EXPOSE 5000
CMD ["nginx", "-g", "daemon off;"]
# Multi-stage build — serves the static export via nginx
# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
# The static export lands in /app/out

# Serve stage — tiny nginx image
FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html

# nginx config — needed for Next.js trailingSlash + client-side routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

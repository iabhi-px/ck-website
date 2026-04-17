# ---- Build stage ----
# Use Node to install dependencies and build the static site.
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ---- Runtime stage ----
# Use nginx-unprivileged: pre-configured to run as non-root on port 8080,
# with writable cache/pid paths. Ideal for Kubernetes.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runtime

# Custom site config (caching + healthcheck + 404 page)
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built site into nginx's web root
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

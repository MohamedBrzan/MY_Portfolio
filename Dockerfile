# -------- Base Builder Stage --------
FROM node:20-alpine AS builder

# Add non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /app

# Copy Yarn files and install dependencies
COPY --chown=app:app package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source files
COPY --chown=app:app . .

# Build the Vite app (output will go to /app/dist)
RUN yarn build

# -------- Nginx Serving Stage --------
FROM nginx:1.25-alpine AS production

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Vite app to Nginx HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

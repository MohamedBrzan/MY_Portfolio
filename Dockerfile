# -------- Base Builder Stage --------
FROM node:20-alpine AS builder

RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /app

RUN corepack enable

COPY --chown=app:app package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY --chown=app:app . .
RUN pnpm build

# -------- Nginx Serving Stage --------
FROM nginx:1.27-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM node:20.10.0-slim AS builder
WORKDIR /app

# Transpile TypeScript
COPY package.json package-lock.json tsconfig.json ./
RUN --mount=type=cache,target=~/.npm npm ci
COPY src ./src
RUN npm run build

# Reinstall node_modules for production only
RUN --mount=type=cache,target=~/.npm npm ci --only=production

FROM node:20.10.0-slim

ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["node", "/app/dist/index.js"]

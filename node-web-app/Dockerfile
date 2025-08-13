# 1) Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production
COPY index.js ./

# 2) Final stage (smaller)
FROM node:20-alpine AS runtime
# create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /app
COPY --from=build /app /app
USER appuser
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "index.js"]

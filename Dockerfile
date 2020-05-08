FROM node:12.13.1 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=builder /app/dist/NewsClient /usr/share/nginx/html
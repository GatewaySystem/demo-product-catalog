FROM public.ecr.aws/docker/library/node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
EXPOSE 8081
CMD ["node", "src/index.js"]

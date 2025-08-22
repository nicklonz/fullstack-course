FROM node:20-alpine

WORKDIR /usr/src/app

# Install deps first (better layer cache)
COPY package.json package-lock.json* ./
RUN npm install || true

# Copy the rest
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "-p", "3000"]

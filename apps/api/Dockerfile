FROM node:20-alpine

WORKDIR /usr/src/app

# Install deps first (better cache)
COPY package.json package-lock.json* ./
RUN npm install || true

# Copy app
COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

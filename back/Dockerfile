# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /backend

# Instala bash
RUN apk add --no-cache bash

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Copia el script wait-for-it.sh
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Expose port
EXPOSE 3001

# Environment variables
ENV NODE_ENV=production

# Command to run the application
CMD ["./wait-for-it.sh", "db:3306", "--", "npm", "start"]
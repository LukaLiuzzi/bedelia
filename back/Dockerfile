# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /backend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3001

# Environment variables
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "start"]
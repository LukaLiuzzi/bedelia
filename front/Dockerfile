FROM node:18-alpine

WORKDIR /frontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port (typically 3000 for React/Vite apps)
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]

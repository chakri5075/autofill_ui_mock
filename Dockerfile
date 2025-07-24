# Use the latest LTS version of Node.js
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["node", "server.js", "npx", "serve", "-s", "build", "-l", "8080", "nginx", "-g", "daemon off;"]

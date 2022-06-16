# Inherit base lightweight linux distro with NodeJS
FROM node:18-alpine
# Set initial project location
WORKDIR /usr/local/src
# Copy dependencies manifesto and .lock file
COPY package.json package-lock.json ./
# Installing dependencies with package manager
RUN npm install
# Copy all other sources
COPY . .
# Execute required build command defined in package manifesto
ENV CI=true
RUN npm run test \
 && npm run build
# Opening container port to host system
EXPOSE 3000
# Define initial command to start webserver
CMD ["npm", "start"]

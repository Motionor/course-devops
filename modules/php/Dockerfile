# Inherit base lightweight linux distro with NodeJS
FROM bitnami/symfony:latest
# Set initial project location
WORKDIR /usr/local/src
# Copy dependencies manifesto and .lock file
COPY composer.json composer.lock symfony.lock ./
# Installing dependencies with package manager ignoring required PHP extensions and scripts
RUN composer install --ignore-platform-reqs
# Copy all other sources
COPY . .
# Opening container port to host system
EXPOSE 7000
# Define initial command to start webserver
CMD ["composer", "run", "start"]

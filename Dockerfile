# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the Angular build output to the Nginx HTML directory
COPY dist/angular-ecommerce /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

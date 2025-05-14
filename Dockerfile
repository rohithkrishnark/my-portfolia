# Step 1: Use the official Nginx image as a base image
FROM nginx:alpine

# Step 2: Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy only the build folder into the Nginx HTML directory
COPY build/ /usr/share/nginx/html/

# Step 4: Expose the port that Nginx will use
EXPOSE 80

# Step 5: The default command to run Nginx
CMD ["nginx", "-g", "daemon off;"]

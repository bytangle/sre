# Use Amazon's official AWS Lambda Node.js image
FROM public.ecr.aws/lambda/nodejs:18

# Set the working directory
WORKDIR /var/task

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy the rest of the application
COPY . .

# Command to run AWS Lambda handler
CMD ["index.handler"]

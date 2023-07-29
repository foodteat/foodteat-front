FROM node:19
# App directory
WORKDIR /usr/src/app
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy project source code into image
COPY . .
# expose running port
EXPOSE 3000
# Run the apllication
CMD ["npm", "run", "dev"]
FROM node:24-alpine

# Working directory
WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .


EXPOSE 5173

# Starting the development server in host mode so it's accessible outside the container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

#To run use : docker run -p 5173:5173 player-club-management
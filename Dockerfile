FROM node


# Create app directory
WORKDIR /usr/app

# Bundle app source
COPY . .

#EXPOSE 8080

CMD [ "node", "index.js" ]

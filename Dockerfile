FROM node:14

WORKDIR /var/www

COPY /package.json .

RUN npm install

COPY . .

EXPOSE 3000

#RUN npm run start

CMD [ "npm", "start" ]
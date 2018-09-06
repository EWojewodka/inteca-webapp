FROM node:8.11.4-alpine
RUN mkdir -p /src
VOLUME /tmp
EXPOSE 4200
WORKDIR /src
COPY package.json /src/
RUN ["npm", "install"]
COPY . /src
CMD ["npm", "start"]

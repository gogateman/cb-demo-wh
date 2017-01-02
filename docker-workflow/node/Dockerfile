FROM    node

RUN npm install -g nodemon
RUN npm install -g pm2

ADD package.json /tmp/package.json

RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src/

WORKDIR /src
ADD . /src

EXPOSE  8080
CMD ["pm2", "start", "/src/index.js", "--no-daemon", "-i", "1"]

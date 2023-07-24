FROM ubuntu:16.04


# install node 
RUN apt-get update \
    && apt-get install -y wget \
    && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

RUN node -v \  
    && npm -v

# install mongo
RUN wget -qO - https://www.mongodb.org/static/pgp/server-3.4.asc | apt-key add -
RUN touch /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list

RUN apt-get update

RUN apt-get install -y mongodb-org

WORKDIR /app

COPY package.json .

RUN npm install 

COPY . .

CMD ["npm", "run", "start"]
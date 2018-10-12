FROM nginx
COPY servers /etc/
RUN apt-get update
RUN apt-get install nano
RUN apt-get install gnupg -y

RUN apt-get update -yq && apt-get upgrade -yq
RUN apt-get install -yq curl git nano
# install from nodesource using apt-get
# https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -yq nodejs build-essential

# fix npm - not the latest version installed by apt-get
RUN npm install -g npm
RUN npm install pm2 -g

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
EXPOSE 8081
EXPOSE 8082
EXPOSE 5000

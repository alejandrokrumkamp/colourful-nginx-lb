FROM nginx
COPY colour-server /etc/
RUN apt-get update
RUN apt-get install nano
RUN apt-get install gnupg -y

RUN apt-get update -yq && apt-get upgrade -yq
RUN apt-get install -yq curl git nano
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -yq nodejs build-essential

RUN npm install -g npm
RUN npm install pm2 -g

RUN rm /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 8081
EXPOSE 8082
EXPOSE 5000

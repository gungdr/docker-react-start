FROM node:latest
RUN npm install -g react react-dom babel-cli webpack webpack-dev-server create-react-app
RUN mkdir /myapp
WORKDIR /myapp
ADD . /myapp
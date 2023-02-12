FROM --platform=linux/amd64 node:19-bullseye

COPY . .
RUN npm install

ENTRYPOINT npm start --host 0.0.0.0
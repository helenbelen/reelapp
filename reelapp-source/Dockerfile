FROM node:8
WORKDIR .
COPY package*.json /
RUN npm install
COPY . .
EXPOSE 3030
ENV VIDEO http://techslides.com/demos/sample-videos/small.mp4
# ARG video
# ADD $video video.mp4
CMD ["npm","start"]

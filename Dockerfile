FROM node:20-bullseye-slim

RUN apt-get update && apt-get install -y \
    ffmpeg \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/MrMasterOfc2/OVL-MD-V2.git /OVL-MD-V2

WORKDIR /OVL-MD-V2

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]

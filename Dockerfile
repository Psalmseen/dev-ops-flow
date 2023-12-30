FROM ubuntu:latest

WORKDIR /src

RUN apt-get update && apt-get install -y wget unzip
RUN wget $(curl -s https://api.github.com/repos/psalmseen/dev-ops-flow/releases/latest | grep "browser_download_url" | cut -d '"' -f 4)
RUN unzip dev-ops-flow.zip -d /app
RUN rm dev-ops-flow.zip
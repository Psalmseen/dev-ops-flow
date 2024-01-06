FROM ubuntu:latest

WORKDIR /

COPY / /app

RUN ls

WORKDIR /app

RUN ls

RUN npm run dev




# RUN apt-get update && apt-get install -y wget unzip



# Fetch the latest release information from GitHub API
# RUN LATEST_RELEASE=$(curl -sSL "https://api.github.com/repos/psalmseen/dev-ops-flow/releases/latest" | jq -r .tag_name) && \
#     RELEASE_URL="https://github.com/psalmseen/dev-ops-flow/releases/download/${LATEST_RELEASE}/your-release-asset.tar.gz" && \
#     wget ${RELEASE_URL} -O /tmp/your-release-asset.tar.gz


# RUN wget $(curl -s https://api.github.com/repos/psalmseen/dev-ops-flow/releases/latest | grep "assets_url" | cut -d '"' -f 4)
# RUN unzip dev-ops-flow.zip -d /app
# RUN rm dev-ops-flow.zip


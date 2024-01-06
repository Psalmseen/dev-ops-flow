# Use the latest Ubuntu as a base image
FROM node:latest

# Set the working directory in the container
WORKDIR /

# Copy the entire contents of the current directory to /app in the container
COPY . /app

# Navigate to /app directory
WORKDIR /app



# Display the contents of the current directory
RUN node -v \
    && npm -v

# Install project dependencies (assuming you have a package.json file)
RUN npm install

# Display the contents of the /app directory
RUN ls

# Define the command to run your application (assuming you have an npm script named "dev")
CMD ["npm", "run", "serve"]

# RUN apt-get update && apt-get install -y wget unzip



# Fetch the latest release information from GitHub API
# RUN LATEST_RELEASE=$(curl -sSL "https://api.github.com/repos/psalmseen/dev-ops-flow/releases/latest" | jq -r .tag_name) && \
#     RELEASE_URL="https://github.com/psalmseen/dev-ops-flow/releases/download/${LATEST_RELEASE}/your-release-asset.tar.gz" && \
#     wget ${RELEASE_URL} -O /tmp/your-release-asset.tar.gz


# RUN wget $(curl -s https://api.github.com/repos/psalmseen/dev-ops-flow/releases/latest | grep "assets_url" | cut -d '"' -f 4)
# RUN unzip dev-ops-flow.zip -d /app
# RUN rm dev-ops-flow.zip


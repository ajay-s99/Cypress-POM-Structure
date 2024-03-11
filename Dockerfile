FROM cypress/browsers
RUN mkdir /my-test-project
WORKDIR /my-test-project
COPY ./package.json .

COPY ./cypress ./cypress

RUN npm install

ENTRYPOINT ["npx", "cypress", "run"]

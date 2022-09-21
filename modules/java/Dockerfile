FROM gradle:7.4.1 AS build

WORKDIR /usr/local/src

RUN .gradlew

COPY . .

EXPOSE 8080

CMD .gradlew bootRun

RUN mkdir /app


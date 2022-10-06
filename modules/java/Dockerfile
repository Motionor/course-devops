FROM gradle:7.4.1 AS build

WORKDIR /usr/local/src

COPY gradlew gradlew

COPY ./gradle ./gradle

COPY ./.gradle ./.gradle

RUN ./gradlew

COPY . .

RUN ./gradlew build

EXPOSE 8080

CMD ./gradlew bootRun

RUN mkdir /app


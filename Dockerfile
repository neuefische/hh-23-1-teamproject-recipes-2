FROM openjdk:19

ENV ENVIRONMENT=prod

LABEL maintainer="Mr.T@Ateam.de"

EXPOSE 8080

ADD backend/target/recipeapp.jar recipeapp.jar

CMD ["sh", "-c", "java -jar /recipeapp.jar"]



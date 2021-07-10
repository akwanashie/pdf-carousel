# PDF Carousel

A simple PDF carousel app built on Express.js

## Local Setup

- Start db

    ```bash
    docker-compose -f db/docker/docker-compose.yml up -d
    ```

- Setup DB

    ```bash
    docker run --rm -v $(pwd)/db/sql:/files/sql \
        -e "FLYWAY_URL=jdbc:postgresql://pdfcarousel-db:5432/pdfcarousel?currentSchema=public" \
        -e "FLYWAY_LOCATIONS=filesystem:/files/sql" \
        -e "FLYWAY_USER=dbuser" \
        -e "FLYWAY_PASSWORD=password" \
        --network=docker_pdfcarousel-db-network \
        flyway/flyway migrate -outputType=json
    ```

- Start

    ```bash
        export DATABASE_URL=postgres://dbuser:password@localhost:5432/pdfcarousel
        npm start
    ```

- Stop DB

    ```bash
    docker-compose -f db/docker/docker-compose.yml down -v
    ```

## To Do

- Use logger instead of `console.log`
- Load config based on env
- Fix broken side links
- Add button to crate new file
- Display "file saved" confirmation
- Display error if file not saved
- Do some field validation
- Delete app from joint heroku
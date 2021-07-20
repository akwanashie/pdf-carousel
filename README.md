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

- Add button to crate new file
- Display "file saved" confirmation
- Display error if file not saved
- Do some field validation
- Add table to view all files
- Actually save the file to s3
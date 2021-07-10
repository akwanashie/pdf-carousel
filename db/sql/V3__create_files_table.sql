CREATE TABLE IF NOT EXISTS files (
    id BIGSERIAL NOT NULL,
    filename CHARACTER VARYING(100),
    title CHARACTER VARYING(100),
    description CHARACTER VARYING(255),
    enabled  BOOLEAN,
    PRIMARY KEY (id),
    UNIQUE(filename),
    UNIQUE(title)
);
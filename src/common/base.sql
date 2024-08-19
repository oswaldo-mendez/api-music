-- Sentencia de SQL que crea nuestra base de datos
CREATE DATABASE Music
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Crear tabla Artists
CREATE TABLE artists(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
	bio TEXT NOT NULL,
    photoUrl TEXT NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Insertar datos en Author
INSERT INTO artists ( name, bio, photo_url, "createdAt", "updatedAt") VALUES
('The Beatles', 'The Beatles were an English rock band formed in Liverpool.', 'https://picsum.photos/id/1015/400/400', NOW(), NOW()),
('Adele', 'Adele is an English singer-songwriter known for her soulful voice.', 'https://picsum.photos/id/1016/400/400', NOW(), NOW());

-- Crear tabla Songs
CREATE TABLE Songs(
	id SERIAL PRIMARY KEY,
	title VARCHAR (250),
	artist_id INT,
	releaseYear INT,
	duration INT,
	coverUrl TEXT NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Insertar datos en Songs
INSERT INTO Songs (title, artist_id, releaseYear, duration, coverUrl, "createdAt", "updatedAt") VALUES
('Hey Jude', 1, 1968, 431, 'https://picsum.photos/id/1018/400/400', NOW(), NOW()),
('Let It Be', 1, 1970, 243, 'https://picsum.photos/id/1020/400/400', NOW(), NOW()),
('Rolling in the Deep', 2, 2010, 228, 'https://picsum.photos/id/1021/400/400', NOW(), NOW()),
('Someone Like You', 2, 2011, 284, 'https://picsum.photos/id/1022/400/400', NOW(), NOW()),
('Hello', 2, 2015, 295, 'https://picsum.photos/id/1023/400/400', NOW(), NOW());



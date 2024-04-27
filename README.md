# Aiden Fleming TurnPoint Code Challenge

## Prerequisites
1. Docker must be installed and running on your machine
2. Port 3306 must be available
   
### clone this repo

```bash
git clone https://github.com/AID5/turnpoint-code-challenge
```

## Run the api server

### 2. install dependencies

```bash
cd api
npm install
```

### 3. run the db

```bash
npm run docker:db-up
```
or
```bash
npm run docker:db-start
```
if the docker container is already initialised


### 4. run the server on port 8080

```bash
npm run start
```

### 5. check server is running

```bash
curl 127.0.0.1:8080
```

## Run the react app

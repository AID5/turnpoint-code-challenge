# Aiden Fleming TurnPoint Code Challenge

## Prerequisites

1. Docker must be installed and running on your machine
2. Ports 3306, 8080, and 3000 must be available

### clone this repo

```bash
git clone https://github.com/AID5/turnpoint-code-challenge
```

## Run the express api server

### 1. install dependencies

```bash
cd api
npm install
```

### 2. run the db

```bash
npm run docker:db-up
```

or

```bash
npm run docker:db-start
```

if the docker container is already initialised but not running
  
##### note: docker image and container can be removed by running

```bash
npm run docker:db-down
```

### 3. run the server on port 8080

```bash
npm run dev
```

## Run the react app

### 1. install dependencies

open a new terminal window to the root directory of the repo and run

```bash
cd app
npm install
```

### 2. Open the app

<http://localhost:3000/>

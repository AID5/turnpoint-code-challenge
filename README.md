# Aiden Fleming TurnPoint Code Challenge

## Prerequisites

1. Docker must be installed and running on your machine
2. Node must be installed
3. Ports 3306, 8080, and 3000 must be available

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


docker image and container can be removed by running

```bash
npm run docker:db-down
```

##### note: docker may take some time to initialise the database

### 3. run the server on port 8080

open a new terminal window to the root directory of the repo and run

```bash
cd api
npm run dev
```

### 4. (Optional) Check the api is running by opening the address in your browser and checking for the message

<http://localhost:8080/>

## Run the react app

### 1. install dependencies

open a new terminal window to the root directory of the repo and run

```bash
cd app
npm install
```

### 2. Run the app

```bash
npm run dev
```

### 3. Open the app

<http://localhost:3000/>

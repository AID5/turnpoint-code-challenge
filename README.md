# Aiden Fleming TurnPoint Code Challenge

## Run the api server

### 1. clone this repo

```bash
git clone ENTER URL HERE
cd api
```

### 2. install dependencies

```bash
npm install
```

### 3. run the db

```bash
docker build -t aidenfleming_mysql_db .
docker run -d --name aidenfleming_code_challenge -p 3306:3306 aidenfleming_mysql_db
```

### 3. run the server on port 8080

```bash
node index.js
```

### 4. check server is running

```bash
curl 127.0.0.1:8080
```
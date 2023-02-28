# Go Embed

Embed a React App into an executable binary with GO.

This is achieved by the following:

1. Change into the client directory

```bash
cd client
```
2. Then run

```bash
npm install
```
```bash
npm run build
```

This will install, build and move your dist folder into the server directory


3. Then change into the server directory

```bash
cd server
```

4. Then run

```go
go build -o app main.go
```

This will create an executable binary file named `app` that you can run
by double clicking or with the following command in the terminal

```bash
./app
```
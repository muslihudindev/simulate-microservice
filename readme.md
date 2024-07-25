# Simulate API Gateway

## Run the microservice

```bash
cd my-microservice
npm install
npm start
```

## Run the api gateway

```bash
cd api-gateway
npm install
npm start
```

Open a web browser or Postman and navigate to <http://localhost:4000/service/hello>
You should see the response: Hello, World! from the microservice through the API Gateway.

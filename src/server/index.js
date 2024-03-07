const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to JSON Server
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

// app.use(cors({
//   origin: 'https://silly-clocks-shout.loca.lt/sectors', // Replace '*' with your frontend domain in production
//   methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow 'Authorization' header
// }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

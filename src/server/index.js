const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to JSON Server
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

// Your other routes and middleware here

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

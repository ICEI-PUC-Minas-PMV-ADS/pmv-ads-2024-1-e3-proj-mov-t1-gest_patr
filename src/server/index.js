const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy requests to JSON Server
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));

app.use(cors());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

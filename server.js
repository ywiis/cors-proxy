const express = require('express');
const corsAnywhere = require('cors-anywhere');

const app = express();
const PORT = process.env.PORT || 8080;

// إصلاح ردود preflight
app.options('*', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-app-id, x-access-token, x-device-info');
  res.sendStatus(200);
});

// بدء خادم cors-anywhere
corsAnywhere.createServer({
  originWhitelist: [], // السماح للجميع
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, () => {
  console.log(`CORS Proxy running on port ${PORT}`);
});

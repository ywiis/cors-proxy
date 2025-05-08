const cors_proxy = require('cors-anywhere');

const host = '0.0.0.0';
const port = process.env.PORT || 8080;

cors_proxy.createServer({
  originWhitelist: [], // السماح لكل النطاقات
  requireHeader: [],
  removeHeaders: ['cookie', 'cookie2'],
  // إضافة رؤوس CORS صريحة لأي طلب
  setHeaders: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': '*',
  }
}).listen(port, host, () => {
  console.log(`CORS Proxy running on http://${host}:${port}`);
});

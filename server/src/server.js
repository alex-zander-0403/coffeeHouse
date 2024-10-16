const app = require('./app');
require('dotenv').config();

const PORT = process.env.POST || 3000;

app.listen(PORT, () => {
  console.log(`Сервер запущен.. порт = ${PORT}`);
});

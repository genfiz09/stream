const http = require('./main');
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

http.listen(3000, () => {
  
console.log(`Server on port ${app.get('port')}`);
});


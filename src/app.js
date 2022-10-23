const http = require('./main');

//const app = express();




http.listen(process.env.PORT || 3000)
console.log('puerto coriendo en el puerto', process.env.PORT || 3000 );


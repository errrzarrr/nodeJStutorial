var express      = require('express')
var cookieParser = require('cookie-parser')
const PORT = 3333;
var app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
   console.log("Cookies: ", req.cookies);
})
app.listen(PORT);

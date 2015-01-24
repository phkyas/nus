var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic("D:/development/nus2015/nus/trunk"));
app.listen(80);
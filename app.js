let express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const Mainroutes = require('./routes/index.js');
const cardRoutes = require('./routes/cardRoutes.js');

app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());

app.set('view engine', 'pug');

app.use('/', Mainroutes);
app.use('/cards', cardRoutes);

app.use((req,res,next)=>{
    let err = new Error();
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.locals.error=err;
    res.status(err.status);
    res.render('error');
    next();
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});

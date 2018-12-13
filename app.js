//app.js
const express =  require('express');
const app = express();
const morgan = require('morgan');
const bodyPaser = require('body-parser');
const cookie = require('cookie-parser');
const port = process.env.PORT || 4000;
const dev = app.get('env') !== 'production';
const path = require('path');

app.use(bodyPaser.urlencoded({
    extended: true
}));
app.use(bodyPaser.json());
app.use(cookie());
if (!dev){
    app.use(morgan('common'));
}
if (dev){
    app.use(morgan('dev'));
    // app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    // app.get('*', (req, res) => {
    //     res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    // })
}
app.use(express.static(path.resolve(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})
const apiRouter = require('./routers/api');
app.use('/api', apiRouter);
app.listen(port, () => {
    console.log('Server is listening on port : ', port);
});
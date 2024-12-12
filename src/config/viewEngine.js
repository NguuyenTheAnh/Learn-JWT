import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const configViewEngine = (app) => {
    //config static files
    app.use(express.static(path.join(__dirname, '../public')));
    app.use(express.static('public'))

    //config views
    app.set('view engine', 'ejs');
    app.set('views', './src/views');

    //req.body Config
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}
export { configViewEngine }
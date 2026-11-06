import express from 'express';
import path from 'node:path';

const app = express();

//configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

//built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//serve static assets
app.use(express.static(path.join(import.meta.dirname, 'public')));

//application routes
app.get('/', (req,res,next) => {
   res.status(200).json({
    status: 'success',
    message: 'backend index route touced!'
   }); 
});
//404 handler
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

//global error handler
app.use((error, req, res, next) => {
    console.log(error.error);

    res.status(500).json({
        message: 'Internal server error'
    });
});

export default app;
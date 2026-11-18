import express from 'express';
import path from 'node:path';
import projects from '../data/featuredProjects.json' with { type: 'json' };
import skillsProjects from '../data/skillsProjects.json' with { type: 'json' };
import contact from '../data/contact.json' with { type: 'json' };
import { navigationLinks } from '../data/navigation.js';

const app = express();

//allows every ejs template to acces these properties without explicitly passing through the res.render()
app.locals.navigationLinks = navigationLinks;
app.locals.activeNav = null;

//configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'views'));

//built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//serve static assets
app.use(express.static(path.join(import.meta.dirname, 'public')));

//application routes
app.get('/', (req, res) => {
    res.render('pages/homepage', { projects, activeNav: 'projects' });
});
app.get('/skills', (req, res) => {
    res.render('pages/skillsPage', { activeNav: 'skills', skillsProjects });
});
app.get('/about', (req, res) => {
    res.render('pages/aboutPage', { activeNav: 'about' });
});
app.get('/contact', (req, res) => {
    res.render('pages/contactPage', { activeNav: 'contact', contact });
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

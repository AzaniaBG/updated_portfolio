'use strict'
const express = require('express');
const app = express();

const {ProjectsData} = require('./module.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'ABG - Welcome',
        projectsData: ProjectsData,
    });
});

app.listen(8000, () => console.log("PORT HERE at http://localhost:8000/!"));

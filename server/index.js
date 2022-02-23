'use strict'
const express = require('express');
const app = require('./src/app');

const projectsData = require('./src/projects.js')

// let projectsNames = projectsData.projects.map(el => el.projectName);
// console.log(projectsNames);


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('./pages/index.ejs', {
        title: 'ABG - Welcome Page',
        header: 'Azania Baker-Garcia',
        footer: 'ABG - Home',
    });
})

app.get('/contact', (req, res) => {
    res.render('./pages/contact.ejs', {
        title: 'ABG - Contact',
        header: 'Get in touch!',
        footer: 'ABG - Contact'
    });
})

app.get('/resume', (req, res) => {
    res.render('./pages/resume.ejs', {
        title: 'ABG - Resume',
        header: 'Resume - Azania Baker-Garcia',
        footer: 'ABG - Resume'
    });
})

app.get('/projects', (req, res) => {
    res.render('./pages/projects.ejs', {
        title: 'ABG - Projects',
        header: 'Projects - Azania Baker-Garcia',
        footer: 'ABG - Projects',
        projectsData: projectsData
    })
})



app.listen(8000, () => console.log("PORT HERE at http://localhost:8000/!"));

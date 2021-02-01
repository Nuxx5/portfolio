'use strict'

var gProjs = [
    {
        id: 'minesweeper',
        name: 'Minesweeper',
        title: 'The classic game returns',
        desc: 'addictive brain game',
        url: 'https://nuxx5.github.io/minesweeper/',
        imgURL: 'img/portfolio/minesweeper.png',
        publishedAt: '1611145800'
    },
    {
        id: 'guessme',
        name: 'Guess Me',
        title: 'The Guessing Game',
        desc: 'a fun game of guessing',
        url: 'https://nuxx5.github.io/GuessMe/',
        imgURL: 'img/portfolio/guessme.png',
        publishedAt: '1612114680'
    },
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Classic arcade game',
        desc: 'try to eat all the food and survive as you run around a maze full of ghosts',
        url: 'https://nuxx5.github.io/Pacman/',
        imgURL: 'img/portfolio/pacman.png',
        publishedAt: '1610968080'
    },
];


function getProjs() {
    return gProjs;
}

function getProjById(projId) {
    return gProjs.find(function (proj) {
        return proj.id === projId;
    })
}


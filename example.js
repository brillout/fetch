const fetch = require('.');

fetch('https://brillout-misc.github.io/game-of-thrones/characters/list.json')
.then(response => response.json())
.then(characters => console.log(characters))

const fetch = require('.');

(async () => {
  const response = await fetch('https://brillout-misc.github.io/game-of-thrones/characters/list.json');
  const characters = await response.json();
  console.log(characters);
})();

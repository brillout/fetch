The `@brillout/fetch` package
uses `window.fetch` if run in the browser and
uses `node-fetch` if run in Node.js.
It works well with Webpack.

This means that no polyfill is used in the browser, saving KBs and delay for your users.

This is also means that IE11 is **not** supported.

With IE11's decline, not supporting IE11 is more and more an option.
According to canisue IE11 is the only browser not supporting fetch: https://caniuse.com/#feat=fetch.

If you want IE11 then use another fetch library, see the list of fetch libraries bellow.

# Usage

~~~js
const fetch = require('@brillout/fetch'); // npm install @brillout/fetch

fetch('https://brillout-misc.github.io/game-of-thrones/characters/list.json')
.then(response => response.json())
.then(characters => console.log(characters))
~~~

# List of fetch libraries

 - [node-fetch](https://github.com/bitinn/node-fetch) - Fetch implementation for Node.js
 - [whatwg-fetch](https://github.com/github/fetch) - Fetch polyfill for the browser
 - [@brillout-fetch]() - Universal fetch without IE11 support (Based on native `window.fetch` and `node-fetch`)
 - [fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill) - Universal fetch ponyfill with IE11 support (Based on `whatwg-fetch` and `node-fetch`)
 - [cross-fetch](https://github.com/lquixada/cross-fetch) - Universal fetch ponyfill with IE11 support (Based on `whatwg-fetch` and `node-fetch`)
 - [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Universal fetch polyfill with IE11 support (Based on `whatwg-fetch` and `node-fetch`)

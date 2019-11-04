# `@brillout/fetch`

The `@brillout/fetch` package uses:
- The browser built-in `window.fetch` if run in the browser.
- The NPM package [`node-fetch`](https://github.com/bitinn/node-fetch) if run in Node.js.

`@brillout/fetch` is designed to work well with bundlers such as Webpack and Parcel.

No polyfill is used in the browser, saving KBs and delay for your users.
This is means that IE11 is not supported.
(IE11 is the only browser not supporting fetch: https://caniuse.com/#feat=fetch.)
With IE11's decline, not supporting IE11 is more and more an option.
If you want IE11 support then use another fetch library, see the list of fetch libraries below.

### Usage

~~~js
const fetch = require('@brillout/fetch'); // npm install @brillout/fetch
// import fetch from '@brillout/fetch';

(async () => {
  const response = await fetch('https://brillout-misc.github.io/game-of-thrones/characters/list.json');
  const characters = await response.json();
  console.log(characters);
})();
~~~

### List of fetch libraries

 - [node-fetch](https://github.com/bitinn/node-fetch) - Fetch implementation for Node.js
 - [whatwg-fetch](https://github.com/github/fetch) - Fetch polyfill for the browser
 - [@brillout-fetch](#top) - Universal fetch without IE11 support (Based on native `window.fetch` and `node-fetch`)
 - [fetch-ponyfill](https://github.com/qubyte/fetch-ponyfill) - Universal fetch ponyfill with IE11 support (Based on `whatwg-fetch` and `node-fetch`)
 - [cross-fetch](https://github.com/lquixada/cross-fetch) - Universal fetch ponyfill with IE11 support (Based on `whatwg-fetch` and `node-fetch`)
 - [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - Universal fetch polyfill with IE11 support (Based on `whatwg-fetch` and `node-fetch`)

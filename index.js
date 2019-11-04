"use strict";

var assert = require('@brillout/assert');

var fetch;

if( isBrowser() ) {
  assert.usage(
    window.fetch!==undefined,
    [
      "This browser doesn't support `fetch` (`window.fetch===undefined`).",
      "Is this running in Internet Explorer?",
      "Note that the `@brillout/fetch` library doesn't support IE. If you want to support IE then use another fetch library."
    ].join('\n')
  );
  fetch = window.fetch.bind(window);
} else {
  // We use `eval('require')` instead of `require` to
  // make sure that webpack doesn't bundle `node-fetch`.
  fetch = eval('require')('node-fetch');
}

module.exports = fetch;

function isBrowser() {
  return typeof window !== "undefined";
}

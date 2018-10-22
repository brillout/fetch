"use strict";

var assert_usage = require('reassert/usage');

var fetch;

if( isUsingBrowserBuiltIn() ) {
  assert_usage(
    envSupportsFetch(),
    [
      "This browser doesn't seem to support `fetch` (window.fetch===undefined).",
      "Is this running in Internet Explorer?",
      "Note that this fetch library doesn't support IE and if you want to support IE then use another fetch implementation instead."
    ].join('\n')
  );
  fetch = window.fetch;
} else {
  // we use `eval('require')` instead of `require` to
  // make sure that webpack doesn't bundle `node-fetch`
  fetch = eval('require')('node-fetch');
}

module.exports = fetch;
module.exports.isUsingBrowserBuiltIn = isUsingBrowserBuiltIn;

function isUsingBrowserBuiltIn() {
  return typeof window !== "undefined";
}

function envSupportsFetch() {
  return window.fetch!==undefined;
}

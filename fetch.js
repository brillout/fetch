const fetch = (
    typeof window !== "undefined" ? (
        window.fetch
    ) : (
        // we use `eval('require')` instead of `require` to
        // make sure that webpack doesn't bundle `node-fetch`
        eval('require')('node-fetch')
    )
);

module.exports = fetch;

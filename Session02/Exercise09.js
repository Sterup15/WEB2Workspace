require("./scripts.js")

function rtlScriptNames(scripts) {
    return scripts.reduce((res, s) => (s.direction === "rtl" ? [...res, s.name] : res), [])
}

console.log(rtlScriptNames(SCRIPTS)) // → [ "Adlam", "Arabic", "Imperial Aramaic", ... ]
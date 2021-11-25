/* eslint-disable @typescript-eslint/no-var-requires */
var fs = require('fs');
console.log('Updating build date...');
fs.readFile('src/metadata.json', function (err, content) {
    if (err) throw err;
    var metadata = JSON.parse(content);
    metadata.buildDate = Date().toString();
    fs.writeFile('src/metadata.json', JSON.stringify(metadata), function (err) {
        if (err) throw err;
        console.log(`Done: ${metadata.buildDate}`);
    })
});
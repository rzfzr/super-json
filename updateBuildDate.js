/* eslint-disable @typescript-eslint/no-var-requires */
var fs = require('fs');
console.log('Updating build date...');
fs.readFile('src/metadata.json', function (err, content) {
    if (err) throw err;
    var metadata = JSON.parse(content);
    const date = new Date();
    const customDate = date.getUTCFullYear().toString() +
        (date.getUTCMonth() + 1).toString() +
        date.getUTCDate().toString() +
        date.getUTCHours().toString() +
        date.getUTCMinutes().toString() +
        date.getUTCSeconds().toString();
    metadata.buildDate = customDate;
    fs.writeFile('src/metadata.json', JSON.stringify(metadata), function (err) {
        if (err) throw err;
        console.log(`Done: ${metadata.buildDate}`);
    })
});
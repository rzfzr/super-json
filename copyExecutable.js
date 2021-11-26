/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path')
console.log('Copying Executable to path...');

const fromPath = "dist_electron/" + fs.readdirSync('dist_electron/').filter(file => fs.lstatSync('dist_electron/' + file).isFile()).find(f => f.endsWith('.exe'))

const destinationDirectory = path.join(require("os").homedir(), "Desktop") + "\\ClicNet\\SoftwareInstallers\\"
if (!fs.existsSync(destinationDirectory)) {
    fs.mkdirSync(destinationDirectory);
}
const toPath = destinationDirectory + JSON.parse(fs.readFileSync('src/metadata.json')).buildDate + '-' + path.basename(__dirname) + '.exe'
fs.copyFileSync(fromPath, toPath)
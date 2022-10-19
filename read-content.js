var fs = require('fs');
var convert = require('xml-js');

// var ignoreList = ['.classpath', '.project', 'exchange-docs', 'target'];
// const basePath = 'C:\\workspace\\studio-workspace\\logger-performance\\src\\main\\mule';
function readFiles(basePath, options) {
    var {ignoreList} = options;
    var fileOjbs = fs.readdirSync(basePath, {withFileTypes: true});
    
    function readXml(file) {
        var xml = fs.readFileSync(basePath + '\\' + file.name, 'utf8');
        var result = convert.xml2json(xml, {compact: true, spaces: 4});
        // console.log(result);
        return JSON.parse(result);
    }
    
    var output = {};
    
    // console.log(fileOjbs);
    fileOjbs.forEach(file => {
        if (ignoreList.includes(file.name)) return;
    
        // console.log(f.isDirectory(), f);
        if (file.name.endsWith(".xml")) {
            output[file.name] = readXml(file);
        };
    });

    return output;
}

module.exports = { readFiles: readFiles }

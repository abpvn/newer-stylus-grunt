'use strict';

var fs = require('fs');
var path = require('path');

function findImportFile(realFilePath, currentList, stackLevel) {
    var regex = /@(require|import) '(.+?)(\.styl)?'/g;
    var match;
    if (currentList[realFilePath] === false || currentList[realFilePath] > 1 || !fs.existsSync(realFilePath)) {
        return currentList;
    }
    var fileDir = path.dirname(realFilePath);
    currentList[realFilePath] = currentList[realFilePath] ? currentList[realFilePath] + 1 : 1;
    if (fs.existsSync(realFilePath)) {
        var data = fs.readFileSync(realFilePath, 'utf8');
        if (data.match(regex) === null) {
            currentList[realFilePath] = false;
            return currentList;
        }
        while ((match = regex.exec(data)) !== null) {
            var importFile = path.resolve(fileDir, match[2] + '.styl');
            currentList = Object.assign(currentList, findImportFile(importFile, currentList, stackLevel + 1));
        }
    }
    return currentList;
}

function checkForNewerImports(stylusFile, mTime, include) {
    stylusFile = path.resolve(stylusFile);
    if (fs.existsSync(stylusFile)) {
        var baseStat = fs.statSync(stylusFile);
        if (baseStat.mtime > mTime) {
            include(true);
            return;
        }
    }
    var importedFiles = findImportFile(stylusFile, {}, 0);
    delete importedFiles[stylusFile]; //It is checked above
    for (var importFile in importedFiles) {
        if (fs.existsSync(importFile)) {
            var stat = fs.statSync(importFile);
            if (stat.mtime > mTime) {
                include(true);
                return;
            }
        }
    }
    include(false);
    return;
}

module.exports = function(detail, include) {
    if (detail.task === 'stylus') {
        checkForNewerImports(detail.path, detail.time, include);
    } else {
        include(false);
    }
};


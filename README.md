# About
newer-stylus-grunt is a set of helpers which enables STYLUS compilation when using grunt-newer.


# Install

```javascript
npm install newer-stylus-grunt
```
# Usage option 1: use default override function:
```javascript
module.exports = function(grunt) {
    grunt.initConfig({
        newer: {
            options: {
                override: require('newer-stylus-grunt'),
            }
        },
        //Anything else
    });
};
```
# Usage option 2: use checkForNewerImports function:
```javascript
var newerStylusGrunt = require('newer-stylus-grunt');
module.exports = function(grunt) {
    grunt.initConfig({
        newer: {
            options: {
                override: function(detail, include) {
                    if (detail.task === 'stylus') {
                        newerStylusGrunt.checkForNewerImports(detail.path, detail.time, include);
                    } else {
                        include(false);
                    }
                },
            }
        },
        //Anything else
    });
};
```

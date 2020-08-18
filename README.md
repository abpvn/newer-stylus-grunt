# About
newer-stylus-grunt is a set of helpers which enables STYLUS compilation when using grunt-newer.


# Install

```javascript
npm install newer-stylus-grunt
```
# Usage:
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

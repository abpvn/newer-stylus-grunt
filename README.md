# About
newer-stylus-grunt is a set of helpers which enables STYLUS compilation when using grunt-newer.


# Install

```javascript
npm install newer-stylus-grunt
```
# Usage:
```javascript
var newerStylusGrunt = require('newer-stylus-grunt');
// Optional
newerStylusGrunt.setGlobalInclude({
	'src/styles/common.styl': [
		'home.styl',
	],
});
module.exports = function(grunt) {
    grunt.initConfig({
        newer: {
            options: {
                override: newerStylusGrunt,
            }
        },
        //Anything else
    });
};
```

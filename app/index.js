'use strict';

var util = require('util');
var path = require('path');
var chalk = require('chalk');
var yeoman = require('yeoman-generator');

var MeanGenerator = yeoman.generators.Base.extend({
    init: function() {
        // read the local package file
        this.pkg = yeoman.file.readJSON(path.join(__dirname, '..package.json'));

        // invoke npm install on finish
        this.on('end',function() {
            if(!this.options['skip-install']) {
                this.npmInstall();
            }
        });

        // have Yeoman greet the user
        console.log(this.yeoman);

        // replace it with a short and sweet description of your generator
        console.log(chalk.magenta('You\'re using the official MEAN.JS generator.'));
    },

    askForApplicationDetails: function() {
        var done = this.async();
    }
});

module.exports = MeanGenerator;

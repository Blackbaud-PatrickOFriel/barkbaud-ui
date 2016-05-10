(function () {
    'use strict';


    var barkbaudConfig = {
            apiUrl: 'https://barkbaud.herokuapp.com/'
        };

    module.exports = angular
        .module('barkbaud.config', [])
        .constant('barkbaudConfig', barkbaudConfig);
}());

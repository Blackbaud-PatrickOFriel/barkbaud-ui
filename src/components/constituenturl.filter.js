/*global angular */

(function () {
    'use strict';

    var authFactory = require('./auth.factory.js');

    function constituentUrlFilter(barkbaudAuthService) {
        return function (constituentId) {
            return [
                'https://renxt.blackbaud.com/constituents/',
                encodeURIComponent(constituentId),
                '?tenantid=',
                barkbaudAuthService.tenantId
            ].join('');
        };
    }

    constituentUrlFilter.$inject = ['barkbaudAuthService'];

    module.exports = angular.module('barkbaud.components.constituentUrl', [authFactory.name])
        .filter('barkConstituentUrl', constituentUrlFilter);

}());

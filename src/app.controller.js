/* global angular */
(function () {
    'use strict';

    function MainController(barkbaudAuthService) {
        var self = this;
        self.logout = barkbaudAuthService.logout;
    }

    MainController.$inject = ['barkbaudAuthService'];

    module.exports = angular.module('barkbaud.controller', [])
        .controller('MainController', MainController);

}());

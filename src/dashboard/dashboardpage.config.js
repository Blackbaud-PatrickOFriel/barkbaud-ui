/*global angular */

(function () {
    'use strict';

    var dashboardController = require('./dashboardpage.controller.js');

    function dashboardPageConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                controller: 'DashboardPageController as dashboardPage',
                template: require('./dashboardpage.html'),
                url: '/dashboard'
            });
    }

    dashboardPageConfig.$inject = ['$stateProvider'];

    angular.module('barkbaud.dashboard.config', [dashboardController.name])
        .config(dashboardPageConfig);
}());

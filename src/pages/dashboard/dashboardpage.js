/*global angular */

(function () {
    'use strict';

    function dashboardPageConfig($stateProvider) {
        $stateProvider
            .state('dashboard', {
                controller: 'DashboardPageController as dashboardPage',
                templateUrl: 'pages/dashboard/dashboardpage.html',
                url: '/dashboard'
            });
    }

    dashboardPageConfig.$inject = ['$stateProvider'];

    function DashboardPageController($scope, $stateParams, bbData, bbWindow) {
        var self = this;

        $scope.$emit('bbBeginWait');
        bbWindow.setWindowTitle('Dashboard');
        bbData.load({
            data: 'api/dogs'
        }).then(function (result) {
            self.dogs = result.data.data;
            $scope.$emit('bbEndWait');
        }).catch(function () {
            self.error = true;
        });
    }

    DashboardPageController.$inject = [
        '$scope',
        '$stateParams',
        'bbData',
        'bbWindow'
    ];

    angular.module('barkbaud')
        .config(dashboardPageConfig)
        .controller('DashboardPageController', DashboardPageController);
}());

/*global angular */

(function () {
    'use strict';

    function DashboardPageController($scope, $stateParams, bbData, bbWindow) {
        var self = this;

        $scope.$emit('bbBeginWait');
        bbWindow.setWindowTitle('Dashboard');
        bbData.load({
            data: 'api/dogs'
        }).then(function (result) {
            self.dogs = result.data.data;
            $scope.$emit('bbEndWait');
        }).catch(function (result) {
            self.error = result.data.error;
        });
    }

    DashboardPageController.$inject = [
        '$scope',
        '$stateParams',
        'bbData',
        'bbWindow'
    ];

    exports.module = angular.module('barkbaud.dashboard.controller', [])
        .controller('DashboardPageController', DashboardPageController);
}());

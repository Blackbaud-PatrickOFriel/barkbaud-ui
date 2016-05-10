/*global angular */

(function () {
    'use strict';

    function barkFindHome(bbModal) {
        return {
            open: function (dogId) {
                return bbModal.open({
                    controller: 'FindHomeController as findHome',
                    templateUrl: 'dogs/currenthome/findhome.html',
                    resolve: {
                        dogId: function () {
                            return dogId;
                        }
                    }
                });
            }
        };
    }

    barkFindHome.$inject = ['bbModal'];

    module.exports = angular.module('barkbaud.home.find.factory', [])
        .factory('barkFindHome', barkFindHome);
}());

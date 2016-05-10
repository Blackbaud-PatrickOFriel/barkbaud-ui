/*global angular */

(function () {
    'use strict';

    var appConfig = require('../app.config.js'),
        loginController = require('../login/loginpage.controller.js');

    function barkbaudAuthService(barkbaudConfig, bbData, bbModal, $q, $window) {
        var modal,
            service = {};

        function go(action, redirect) {
            $window.location.href = [
                barkbaudConfig.apiUrl,
                'auth/',
                action,
                '?redirect=',
                encodeURIComponent(redirect)
            ].join('');
        }

        service.isAuthenticated = function () {
            var deferred = $q.defer();
            bbData.load({
                data: 'auth/authenticated?' + (new Date().getTime())
            }).then(function (result) {
                service.authenticated = result.data.authenticated;
                service.tenantId = result.data.tenant_id;
                deferred.resolve(result.data.authenticated);
            });
            return deferred.promise;
        };

        service.login = function (redirect) {
            go('login', redirect);
        };

        service.logout = function (redirect) {
            go('logout', redirect);
        };

        service.update = function () {
            modal.close(service.authenticated);
        };

        service.modal = function (redirect) {
            if (!modal) {
                modal = bbModal.open({
                    controller: 'LoginPageController as loginPage',
                    template: require('login/loginpage.html'),
                    resolve: {
                        barkbaudRedirect: function () {
                            return redirect;
                        }
                    }
                });
            }

            return modal.result;
        };

        return service;
    }

    barkbaudAuthService.$inject = [
        'barkbaudConfig',
        'bbData',
        'bbModal',
        '$q',
        '$window'
    ];

    module.exports = angular.module('barkbaud.components.authfactory', [appConfig.name, loginController.name])
        .factory('barkbaudAuthService', barkbaudAuthService);
}());

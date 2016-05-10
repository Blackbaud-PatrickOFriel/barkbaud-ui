
(function () {
    'use strict';
    var appConfig = require('./app.config.js'),
        appController = require('./app.controller.js'),
        dogModule = require('./dogs/dogpage.config.js'),
        componentsModule = require('./components/barkbaud.components.js'),
        dashboardModule = require('./dashboard/barkbaud.dashboard.js'),
        loginModule = require('./login/loginpage.controller.js');

    function config($locationProvider, $urlRouterProvider, bbWindowConfig) {
        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('dashboard');
        });

        bbWindowConfig.productName = 'Barkbaud';
    }

    config.$inject = ['$locationProvider', '$urlRouterProvider', 'bbWindowConfig'];

    function run(barkbaudConfig, bbDataConfig, bbWait, barkbaudAuthService, $rootScope, $state) {

        function addBaseUrl(url) {
            return barkbaudConfig.apiUrl + url;
        }

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            var redirect;
            if (!barkbaudAuthService.authenticated) {
                event.preventDefault();
                $rootScope.$emit('bbBeginWait');

                redirect = $state.href(toState, toParams, { absolute: true });
                barkbaudAuthService.isAuthenticated().then(function (authenticated) {
                    $rootScope.$emit('bbEndWait');
                    if (authenticated) {
                        $state.go(toState, toParams);
                    } else {
                        barkbaudAuthService.modal(redirect).then(function () {
                            return $state.go(toState.name, toParams);
                        });
                    }
                });
            }
        });

        $rootScope.$on('bbBeginWait', function (e, opts) {
            e.stopPropagation();
            bbWait.beginPageWait(opts);
        });

        $rootScope.$on('bbEndWait', function (e, opts) {
            e.stopPropagation();
            bbWait.endPageWait(opts);
        });

        bbDataConfig.dataUrlFilter = addBaseUrl;
        bbDataConfig.resourceUrlFilter = addBaseUrl;
    }

    run.$inject = ['barkbaudConfig', 'bbDataConfig', 'bbWait', 'barkbaudAuthService', '$rootScope', '$state'];

    module.exports = angular.module('barkbaud', ['sky', 'ui.select', 'ui.bootstrap', 'ui.router', 'ngAnimate', appConfig.name, appController.name, dogModule.name, componentsModule.name, dashboardModule.name, loginModule.name])
        .config(config)
        .run(run);
}());

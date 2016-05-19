/*jshint browser: true */
/*globals angular */

(function () {
    'use strict';

    var barkbaudConfig = {
        apiUrl: 'https://barkbaud.herokuapp.com/'
    };

    function config($locationProvider, $urlRouterProvider, bbWindowConfig) {
        $locationProvider.html5Mode(false);

        $urlRouterProvider.otherwise(function ($injector) {
            var $state = $injector.get('$state');
            $state.go('dashboard');
        });

        bbWindowConfig.productName = 'Barkbaud';
    }

    config.$inject = ['$locationProvider', '$urlRouterProvider', 'bbWindowConfig'];

    function run(bbDataConfig, bbWait, barkbaudAuthService, $rootScope, $state) {

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

    run.$inject = ['bbDataConfig', 'bbWait', 'barkbaudAuthService', '$rootScope', '$state'];

    function MainController(barkbaudAuthService) {
        var self = this;
        self.logout = barkbaudAuthService.logout;
        self.isClosable = true;
        self.successType = 'success';
    }

    MainController.$inject = ['barkbaudAuthService'];

    function BBContextMenuController() {
       var vm = this;

       vm.contextButtonStopPropagation = function ($event) {
           $event.stopPropagation();
       };

       vm.getAriaLabel = function () {
           return vm.bbContextMenuLabel;
       };
   }

    function bbContextMenu() {
        return {
            bindToController: {
                bbContextMenuLabel: '@'
            },
            controller: BBContextMenuController,
            controllerAs: 'bbContextMenu',
            restrict: 'E',
            scope: {},
            transclude: true,
            template: '<div class="bb-context-menu" data-bbauto-field="ContextMenuActions" uib-dropdown><bb-context-menu-button1 data-bbauto-field="ContextMenuAnchor" ng-click="bbContextMenu.contextButtonStopPropagation($event)" uib-dropdown-toggle></bb-context-menu-button1><ul uib-dropdown-menu role="menu"><ng-transclude></ng-transclude></ul></div>'
        };
    }

    function BBContextMenuButtonController(bbResources) {
        var vm = this;

        vm.getAriaLabel = function () {
            var ariaLabel;

            if (vm.bbContextMenu) {
                ariaLabel = vm.bbContextMenu.getAriaLabel();
            }

            if (!ariaLabel) {
                ariaLabel = vm.bbContextMenuButtonLabel || bbResources.context_menu_default_label;
            }

            return ariaLabel;
        };
    }

    BBContextMenuButtonController.$inject = ['bbResources'];

    function bbContextMenuButton() {
        function link(scope, el, attrs, ctrls) {
            var bbContextMenu = ctrls[1],
                vm = ctrls[0];

            vm.bbContextMenu = bbContextMenu;
        }

        return {
            bindToController: {
                bbContextMenuButtonLabel: '@'
            },
            controller: BBContextMenuButtonController,
            controllerAs: 'bbContextMenuButton',
            link: link,
            restrict: 'E',
            require: ['bbContextMenuButton1', '?^bbContextMenu1'],
            scope: {},
            template: '<button type="button" class="btn bb-btn-secondary bb-context-menu-btn" aria-label="{{bbContextMenuButton.getAriaLabel()}}"><i class="fa fa-ellipsis-h"></i></button>'
        };
    }

    function bbContextMenuItem() {
        return {
            bindToController: {
                clickItem: '&bbContextMenuAction'
            },
            controller: angular.noop,
            controllerAs: 'bbContextMenuItem',
            restrict: 'E',
            transclude: true,
            scope: {},
            template: '<li role="presentation"><a role="menuitem" href="javascript:void(0)" ng-click="bbContextMenuItem.clickItem()"><ng-transclude></ng-transclude></a></li>'
        };
    }

    function bbContextMenuToggleAccordion() {
        return function ($event, vm) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.accordionOpen = !vm.accordionOpen;
        };
    }

    function bbSubmenu(bbContextMenuToggleAccordion) {
        return {
            bindToController: {
                heading: '=?bbSubmenuHeading'
            },
            controller: angular.noop,
            controllerAs: 'bbSubmenu',
            restrict: 'E',
            scope: {},
            link: function (scope, el, attrs, vm) {
                vm.accordionOpen = false;
                vm.staticHeader = false;

                if (angular.isDefined(attrs.bbSubmenuHeading)) {
                    vm.staticHeader = true;
                }

                vm.toggleAccordion = function ($event) {
                    bbContextMenuToggleAccordion($event, vm);
                };
            },
            transclude: true,
            template: '<div class="bb-submenu"><uib-accordion><uib-accordion-group is-open="bbSubmenu.accordionOpen"><uib-accordion-heading ng-if="bbSubmenu.staticHeader"><div ng-click="bbSubmenu.toggleAccordion($event)"><span>{{bbSubmenu.heading}}<span><i ng-class="\'fa-chevron-\' + (bbSubmenu.accordionOpen ? \'up\' : \'down\')" class="fa bb-submenu-chevron"></i></div></uib-accordion-heading><ng-transclude></ng-transclude></uib-accordion-group></uib-accordion></div>'
        };
    }

    bbSubmenu.$inject = ['bbContextMenuToggleAccordion1'];

    function bbSubmenuHeading() {
        return {
            bindToController: true,
            controller: angular.noop,
            controllerAs: 'bbSubmenuHeading',
            restrict: 'E',
            require: ['bbSubmenuHeading1', '^bbSubmenu1'],
            scope: true,
            link: function ($scope, el, attrs, ctrls) {
                var submenuCtrl = ctrls[1],
                    vm = ctrls[0];

                vm.toggleAccordion = function ($event) {
                    submenuCtrl.toggleAccordion($event);
                };
            },
            transclude: true,
            template: '<uib-accordion-heading><div ng-click="bbSubmenuHeading.toggleAccordion($event)"><ng-transclude></ng-transclude><i ng-class="\'fa-chevron-\' + (bbSubmenuHeading.accordionOpen ? \'up\' : \'down\')" class="fa bb-submenu-chevron"></i></div></uib-accordion-heading>'
        };
    }

    angular.module('barkbaud', ['sky', 'ui.bootstrap', 'ui.router', 'ngAnimate', 'barkbaud.templates', 'ui.gravatar'])
        .directive('bbContextMenu1', bbContextMenu)
        .directive('bbContextMenuButton1', bbContextMenuButton)
        .directive('bbContextMenuItem1', bbContextMenuItem)
        .directive('bbSubmenu1', bbSubmenu)
        .directive('bbSubmenuHeading1', bbSubmenuHeading)
        .factory('bbContextMenuToggleAccordion1', bbContextMenuToggleAccordion)
        .constant('barkbaudConfig', barkbaudConfig)
        .config(config)
        .run(run)
        .controller('MainController', MainController);
}());

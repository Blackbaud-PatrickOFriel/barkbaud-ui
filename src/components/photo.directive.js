/*global angular */

(function () {
    'use strict';

    function barkPhoto(gravatarService) {
        return {
            scope: {
                barkPhotoUrl: '=',
                barkPhotoBase64: '=',
                barkPhotoGravatarEmail: '='
            },
            bindToController: true,
            controller: angular.noop,
            controllerAs: 'barkPhoto',
            link: function (scope, el, attr, barkPhoto) {

                function setImageData(data) {
                    el.css('background-image', 'url("data:image/png;base64,' + data + '")');
                }

                function setImageUrl(url) {
                    el.css('background-image', 'url(\'' + url + '\')');
                }

                scope.$watch(function () {
                    return barkPhoto.barkPhotoUrl;
                }, function (newValue) {
                    if (newValue) {
                        setImageUrl(newValue.replace('http://', '//'));
                    }
                });

                scope.$watch(function () {
                    return barkPhoto.barkPhotoBase64;
                }, function (newValue) {
                    if (newValue) {
                        setImageData(newValue);
                    }
                });

                scope.$watch(function () {
                    return barkPhoto.barkPhotoGravatarEmail;
                }, function (newValue) {
                    if (newValue) {
                        setImageUrl(gravatarService.url(newValue, {default: 'mm'}));
                    }
                });
            },
            replace: true,
            template: require('./photo.directive.html')
        };
    }

    barkPhoto.$inject = [
        'gravatarService'
    ];

    module.exports = angular.module('barkbaud.components.photo', 'ui.gravatar')
        .directive('barkPhoto', barkPhoto);
}());

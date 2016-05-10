/*global angular */

(function () {
    'use strict';
    var homeModule = require('./currenthome/barkbaud.home.js'),
        notesModule = require('./notes/barkbaud.notes.js'),
        previousHomeModule = require('./previoushomes/previoushomestile.controller.js'),
        summaryModule = require('./summary/summarytile.js'),
        dogPageModule = require('./dogpage.controller.js');

    function dogPageConfig($stateProvider) {
        $stateProvider
            .state('dog', {
                abstract: true,
                controller: 'DogPageController as dogPage',
                template: require('dogs/dogpage.html'),
                url: '/dogs/:dogId',
                resolve: {
                    dogId: ['$stateParams', function ($stateParams) {
                        return $stateParams.dogId;
                    }]
                }
            })
            .state('dog.views', {
                url: '',
                views: {
                    'currenthome': {
                        controller: 'DogCurrentHomeTileController as dogCurrentHomeTile',
                        template: require('dogs/currenthome/currenthometile.html')
                    },
                    'previoushomes': {
                        controller: 'DogPreviousHomesTileController as dogPreviousHomesTile',
                        template: require('dogs/previoushomes/previoushomestile.html')
                    },
                    'notes': {
                        controller: 'DogNotesTileController as dogNotesTile',
                        template: require('dogs/notes/notestile.html')
                    }
                }
            });
    }

    dogPageConfig.$inject = ['$stateProvider'];

    module.exports = angular.module('barkbaud.dog.config', [homeModule.name, notesModule.name, previousHomeModule.name, summaryModule.name, dogPageModule.name])
        .config(dogPageConfig);
}());

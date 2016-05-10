/*global angular */

(function () {
    'use strict';

    var noteAddFactory = require('./noteadd.factory.js');

    function DogNotesTileController($scope, bbData, bbMoment, barkNoteAdd, dogId) {
        var self = this;

        self.load = function () {
            $scope.$emit('bbBeginWait', { nonblocking: true });
            bbData.load({
                data: 'api/dogs/' + encodeURIComponent(dogId) + '/notes'
            }).then(function (result) {
                self.notes = result.data.data;
                $scope.$emit('bbEndWait', { nonblocking: true });
            }).catch(function (result) {
                self.error = result.data.error;
                $scope.$emit('bbEndWait', { nonblocking: true });
            });
        };

        self.getNoteDate = function (date) {
            if (date && date.iso) {
                return bbMoment(date.iso).calendar();
            }
        };

        self.addNote = function () {
            barkNoteAdd.open(dogId).result.then(self.load);
        };

        self.load();
    }

    DogNotesTileController.$inject = [
        '$scope',
        'bbData',
        'bbMoment',
        'barkNoteAdd',
        'dogId'
    ];

    module.exports = angular.module('barkbaud.note.tile', [noteAddFactory.name])
        .controller('DogNotesTileController', DogNotesTileController);
}());

/*global angular */

(function () {
    'use strict';

    function barkNoteAdd(bbModal) {
        return {
            open: function (dogId) {
                return bbModal.open({
                    controller: 'NoteAddController as noteAdd',
                    templateUrl: 'dogs/notes/noteadd.html',
                    resolve: {
                        dogId: function () {
                            return dogId;
                        }
                    }
                });
            }
        };
    }

    barkNoteAdd.$inject = ['bbModal'];

    module.exports = angular.module('barkbaud.notes.add.factory', [])
        .factory('barkNoteAdd', barkNoteAdd);
}());

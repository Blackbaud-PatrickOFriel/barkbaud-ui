import noteAddController from './noteadd.controller.js';
import noteAddFactory from './noteadd.factory.js';
import noteTileController from './notestile.controller.js';

module.exports = angular.module('barkbaud.notes', [noteAddController.name, noteAddFactory.name, noteTileController.name]);

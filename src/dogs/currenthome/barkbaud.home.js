import currentHomeController from './currenthometile.controller.js';
import findHomeController from './findhome.controller.js';
import findHomeFactory from './findhome.factory.js';

module.exports = angular.module('barkbaud.home', [currentHomeController.name, findHomeController.name, findHomeFactory.name]);

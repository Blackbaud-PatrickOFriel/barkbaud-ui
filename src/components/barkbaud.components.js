import authFactory from './auth.factory.js';
import constitUrl from './constituenturl.filter.js';
import photo from './photo.directive.js';

module.exports = angular.module('barkbaud.components', [authFactory.name, constitUrl.name, photo.name]);

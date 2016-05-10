import dashConfig from './dashboardpage.config.js';
import dashController from './dashboardpage.controller.js';

module.exports = angular.module('barkbaud.dashboard', [dashConfig.name, dashController.name]);

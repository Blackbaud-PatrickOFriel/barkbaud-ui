/* global angular */
import { SkyAlertComponent } from 'blackbaud-skyux2';
import { upgradeAdapter } from '../upgrade_adapter';

module.exports = angular.module('barkbaud.skyux2', [])
  .directive('skyAlert', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyAlertComponent));

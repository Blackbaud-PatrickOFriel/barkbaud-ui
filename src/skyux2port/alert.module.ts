/* global angular */
import { SkyAlertComponent } from 'blackbaud-skyux2';
import { upgradeAdapter } from '../upgrade_adapter';

let alertModule =  angular.module('barkbaud.skyux2.alert', [])
  .directive('skyAlert', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyAlertComponent));

export default alertModule;

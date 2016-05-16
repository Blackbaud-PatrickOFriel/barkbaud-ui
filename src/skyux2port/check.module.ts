/* global angular */
import { SkyCheckboxComponent } from 'blackbaud-skyux2';
import { upgradeAdapter } from '../upgrade_adapter';

let checkModule =  angular.module('barkbaud.skyux2.check', [])
  .directive('skyCheckbox', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyCheckboxComponent));

export default checkModule;

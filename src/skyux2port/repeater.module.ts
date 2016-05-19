/* global angular */
import { SkyRepeaterComponent } from 'blackbaud-skyux2';
import { upgradeAdapter } from '../upgrade_adapter';

let repeaterModule =  angular.module('barkbaud.skyux2.repeater', [])
  .directive('skyRepeater', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyRepeaterComponent));

export default repeaterModule;

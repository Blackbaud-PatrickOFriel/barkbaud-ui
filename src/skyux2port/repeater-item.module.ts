/* global angular */
import { SkyRepeaterItemComponent } from 'blackbaud-skyux2';
import { upgradeAdapter } from '../upgrade_adapter';

let repeaterItemModule =  angular.module('barkbaud.skyux2.repeateritem', [])
  .directive('skyRepeaterItem', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyRepeaterItemComponent));

export default repeaterItemModule;

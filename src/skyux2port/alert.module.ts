/* global angular */
import {SkyAlertComponent} from 'blackbaud-skyux2';
import { upgradeAdapter } from '../upgrade_adapter';

export default angular.module('barkbaud')
  .directive('skyAlert', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyAlertComponent));

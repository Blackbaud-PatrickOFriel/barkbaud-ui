import { upgradeAdapter } from './upgrade_adapter';
import { SkyAlertComponent } from 'blackbaud-skyux2';

angular.module('barkbaud.skyux2', [])
  .directive('skyAlert', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(SkyAlertComponent));

console.log('wuuuuuut');

upgradeAdapter.bootstrap(document.body, ['barkbaud'], {strictDi: true});

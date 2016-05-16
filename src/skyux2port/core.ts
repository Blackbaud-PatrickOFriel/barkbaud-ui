import Alert from './alert.module.ts';
import Check from './check.module.ts';


let skyUx2Adapter = angular.module('barkbaud.skyux2', [
  Alert.name,
  Check.name
]);

export default skyUx2Adapter;

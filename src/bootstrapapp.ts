import { upgradeAdapter } from './upgrade_adapter';

var barkbaud = require('./app.main');

upgradeAdapter.bootstrap(document.body, [barkbaud.name], {strictDi: true});

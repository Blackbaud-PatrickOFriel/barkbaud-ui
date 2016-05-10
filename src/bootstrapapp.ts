/// <reference path="../typings/main.d.ts" />

import { upgradeAdapter } from './upgrade_adapter';

upgradeAdapter.bootstrap(document.body, ['barkbaud'], {strictDi: true});

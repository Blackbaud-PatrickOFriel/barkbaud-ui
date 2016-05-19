angular.module('barkbaud.templates', []).run(['$templateCache', function($templateCache) {
    $templateCache.put('components/photo.directive.html',
        '<div class="bark-photo img-circle center-block">\n' +
        '</div>\n' +
        '');
    $templateCache.put('dashboard/dashboardpage.html',
        '<div class="container-fluid">\n' +
        '  <h1>Dashboard</h1>\n' +
        '  <section class="panel" ng-repeat="dog in dashboardPage.dogs">\n' +
        '    <div class="panel-body">\n' +
        '      <div class="row">\n' +
        '          <div class="col-md-3 col-lg-2">\n' +
        '            <a ui-sref="dog.views({ dogId: dog._id })">\n' +
        '              <bark-photo bark-photo-base64="dog.image.data"></bark-photo>\n' +
        '            </a>\n' +
        '          </div>\n' +
        '          <div class="col-md-9 col-lg-10">\n' +
        '              <h1>\n' +
        '                <a ui-sref="dog.views({ dogId: dog._id })">{{ dog.name }}</a>\n' +
        '              </h1>\n' +
        '              <h4>{{ dog.breed }} &middot; {{ dog.gender }}</h4>\n' +
        '              <p class="bb-text-block bark-dog-bio">{{ dog.bio }}</p>\n' +
        '          </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </section>\n' +
        '  <div bb-tile-section class="text-danger" ng-show="dashboardPage.error">\n' +
        '    Error loading dogs.\n' +
        '  </div>\n' +
        '</div>\n' +
        '');
    $templateCache.put('dogs/currenthome/currenthometile.html',
        '<bb-tile bb-tile-header="\'Current home\'">\n' +
        '  <bb-tile-header-content ng-show="dogCurrentHomeTile.currentHome.constituentId">\n' +
        '      <bb-tile-header-check></bb-tile-header-check>\n' +
        '  </bb-tile-header-content>\n' +
        '  <div class="toolbar bb-tile-toolbar">\n' +
        '    <button type="button" class="btn bb-btn-secondary" ng-click="dogCurrentHomeTile.findHome()"><i class="fa fa-plus-circle"></i> Find Home</button>\n' +
        '  </div>\n' +
        '  <div ng-show="dogCurrentHomeTile.currentHome">\n' +
        '    <div ng-switch="dogCurrentHomeTile.currentHome.constituentId || 0">\n' +
        '      <div bb-tile-section ng-switch-when="0" class="bb-no-records">\n' +
        '        This dog has no current home.\n' +
        '      </div>\n' +
        '      <div ng-switch-default>\n' +
        '        <div ng-switch="dogCurrentHomeTile.currentHome.constituent.error || \'\'">\n' +
        '          <div bb-tile-section ng-switch-when="\'\'" class="bb-no-records">\n' +
        '            Error reading current home.\n' +
        '          </div>\n' +
        '          <div bb-tile-section ng-switch-default>\n' +
        '            <div class="row">\n' +
        '              <div class="col-sm-3 col-xs-4">\n' +
        '                <bark-photo class="bark-photo-small" ng-if="::dogCurrentHomeTile.currentHome.constituent.profile_picture" bark-photo-url="dogCurrentHomeTile.currentHome.constituent.profile_picture.thumbnail_url"></bark-photo>\n' +
        '                <bark-photo class="bark-photo-small" ng-if="::!dogCurrentHomeTile.currentHome.constituent.profile_picture" bark-photo-gravatar-email="dogCurrentHomeTile.currentHome.constituent.email.address"></bark-photo>\n' +
        '              </div>\n' +
        '              <div class="col-sm-9 col-xs-8">\n' +
        '                <h4>\n' +
        '                  <a ng-href="{{dogCurrentHomeTile.currentHome.constituentId | barkConstituentUrl}}" target="_blank">\n' +
        '                    {{:: dogCurrentHomeTile.currentHome.constituent.first }}\n' +
        '                    {{:: dogCurrentHomeTile.currentHome.constituent.last }}\n' +
        '                  </a>\n' +
        '                </h4>\n' +
        '                <h5>{{:: dogCurrentHomeTile.getTimeInHome(dogCurrentHomeTile.currentHome.fromDate) }}</h5>\n' +
        '                <p class="bark-home-address" ng-show="dogCurrentHomeTile.currentHome.constituent.address.address">{{:: dogCurrentHomeTile.currentHome.constituent.address.address }}</p>\n' +
        '                <p ng-show="dogCurrentHomeTile.currentHome.constituent.phone.number">\n' +
        '                  {{:: dogCurrentHomeTile.currentHome.constituent.phone.number }}\n' +
        '                </p>\n' +
        '                <p ng-show="dogCurrentHomeTile.currentHome.constituent.email.address">\n' +
        '                  <a ng-href="mailto:{{:: dogCurrentHomeTile.currentHome.constituent.email.address }}">{{:: dogCurrentHomeTile.currentHome.constituent.email.address }}</a>\n' +
        '                </p>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <div bb-tile-section class="text-danger" ng-show="dogCurrentHomeTile.error">\n' +
        '    Error loading current home.\n' +
        '  </div>\n' +
        '</bb-tile>\n' +
        '');
    $templateCache.put('dogs/currenthome/findhome.html',
        '<bb-modal>\n' +
        '  <form name="findHome.formFind" ng-submit="findHome.saveData()">\n' +
        '    <div class="modal-form">\n' +
        '      <bb-modal-header>Find a home</bb-modal-header>\n' +
        '      <div bb-modal-body>\n' +
        '        <div class="form-group">\n' +
        '          <label class="control-label">Search By Name</label>\n' +
        '          <ui-select ng-model="findHome.constituent" append-to-body="true" bb-autofocus>\n' +
        '            <ui-select-match allow-clear placeholder="Search by Name">{{$select.selected.name}}</ui-select-match>\n' +
        '            <ui-select-choices repeat="constituent in findHome.results" refresh="findHome.search($select.search, \'single\')" refresh-delay="250">\n' +
        '              <span>{{ constituent.name }} ({{ constituent.id }})</span><br />\n' +
        '              <small><strong>{{ constituent.address }}</strong></small>\n' +
        '            </ui-select-choices>\n' +
        '          </ui-select>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <bb-modal-footer>\n' +
        '        <bb-modal-footer-button-primary></bb-modal-footer-button-primary>\n' +
        '        <bb-modal-footer-button-cancel></bb-modal-footer-button-cancel>\n' +
        '        <span ng-show="noteAdd.error" class="text-danger">\n' +
        '          Error saving home\n' +
        '        </span>\n' +
        '      </bb-modal-footer>\n' +
        '    </div>\n' +
        '  </form>\n' +
        '</bb-modal>\n' +
        '');
    $templateCache.put('dogs/dogpage.html',
        '<div class="bb-page-header">\n' +
        '    <div class="container-fluid">\n' +
        '        <div class="row">\n' +
        '          <div class="col-md-12">\n' +
        '            <sky-alert [alert-type]="\'success\'" [closeable]="mainController.isClosable">\n' +
        '              This dog is a good dog.\n' +
        '            </sky-alert>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '        <div class="row">\n' +
        '            <div class="col-md-3 col-lg-2">\n' +
        '                <bark-photo bark-photo-base64="dogPage.dog.image.data"></bark-photo>\n' +
        '            </div>\n' +
        '            <div class="col-md-9 col-lg-10">\n' +
        '                <h1>\n' +
        '                  {{ dogPage.dog.name }}\n' +
        '                </h1>\n' +
        '                <h4>{{ dogPage.dog.breed }} &middot; {{ dogPage.dog.gender }}</h4>\n' +
        '                <p></p>\n' +
        '                <p class="bb-text-block bark-dog-bio">{{ dogPage.dog.bio }}</p>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<div class="container-fluid">\n' +
        '    <bb-tile-dashboard bb-layout="dogPage.layout" bb-tiles="dogPage.tiles"></bb-tile-dashboard>\n' +
        '</div>\n' +
        '');
    $templateCache.put('dogs/notes/noteadd.html',
        '<bb-modal>\n' +
        '  <form name="noteAdd.formAdd" ng-submit="noteAdd.saveData()">\n' +
        '    <div class="modal-form">\n' +
        '      <bb-modal-header>Add medical history</bb-modal-header>\n' +
        '      <div bb-modal-body>\n' +
        '        <div class="form-group">\n' +
        '          <label class="control-label">History</label>\n' +
        '          <input type="text" class="form-control" ng-model="noteAdd.note.title" />\n' +
        '        </div>\n' +
        '        <div class="form-group">\n' +
        '          <textarea class="form-control" ng-model="noteAdd.note.description"></textarea>\n' +
        '        </div>\n' +
        '        <div class="form-group">\n' +
        '          <sky-checkbox [(selected)]="noteAdd.note.addConstituentNote">\n' +
        '            <sky-checkbox-label>Add as note on current owner\'s Raisers Edge NXT record.\n' +
        '            </sky-checkbox-label>\n' +
        '          </sky-checkbox>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '      <bb-modal-footer>\n' +
        '        <bb-modal-footer-button-primary></bb-modal-footer-button-primary>\n' +
        '        <bb-modal-footer-button-cancel></bb-modal-footer-button-cancel>\n' +
        '        <span ng-show="noteAdd.error" class="text-danger">\n' +
        '          <span ng-show="noteAdd.error.message">{{ noteAdd.error.message }}</span>\n' +
        '          <span ng-hide="noteAdd.error.message">Unknown error occured.</span>\n' +
        '        </span>\n' +
        '      </bb-modal-footer>\n' +
        '    </div>\n' +
        '  </form>\n' +
        '</bb-modal>\n' +
        '');
    $templateCache.put('dogs/notes/notestile.html',
        '<bb-tile bb-tile-header="\'Medical history\'">\n' +
        '  <bb-tile-header-content ng-show="dogNotesTile.notes.length">\n' +
        '      {{ dogNotesTile.notes.length }}\n' +
        '  </bb-tile-header-content>\n' +
        '  <div>\n' +
        '    <div class="toolbar bb-tile-toolbar">\n' +
        '      <button type="button" class="btn bb-btn-secondary" ng-click="dogNotesTile.addNote()"><i class="fa fa-plus-circle"></i> Add History</button>\n' +
        '    </div>\n' +
        '    <div ng-show="dogNotesTile.notes">\n' +
        '      <div ng-switch="dogNotesTile.notes.length || 0">\n' +
        '        <div bb-tile-section ng-switch-when="0" class="bb-no-records">\n' +
        '          This dog has no medical history.\n' +
        '        </div>\n' +
        '        <!--<div ng-switch-default class="bb-repeater">\n' +
        '          <div ng-repeat="note in ::dogNotesTile.notes.slice().reverse() track by $index" class="bb-repeater-item">\n' +
        '            <h4 class="bb-repeater-item-title">{{:: note.title }}</h4>\n' +
        '            <h5>{{:: dogNotesTile.getNoteDate(note.date) }}</h5>\n' +
        '            <p>{{:: note.description }}</p>\n' +
        '          </div>\n' +
        '        </div>-->\n' +
        '        <div ng-switch-default>\n' +
        '          <sky-repeater [expand-mode]="\'single\'">\n' +
        '            <sky-repeater-item ng-repeat="note in ::dogNotesTile.notes.slice().reverse() track by $index" [is-expanded]="item.expanded" [is-collapsible]="dogNotesTile.isCollapsible">\n' +
        '              <sky-repeater-item-title>\n' +
        '                <div>\n' +
        '                  {{note.title}}\n' +
        '                </div>\n' +
        '              </sky-repeater-item-title>\n' +
        '              <sky-repeater-item-content>\n' +
        '                <div>\n' +
        '                {{ note.description }}\n' +
        '              </div>\n' +
        '              </sky-repeater-item-content>\n' +
        '            </sky-repeater-item>\n' +
        '          </sky-repeater>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <div bb-tile-section class="text-danger" ng-show="dogNotesTile.error">\n' +
        '    Error loading notes\n' +
        '  </div>\n' +
        '</bb-tile>\n' +
        '');
    $templateCache.put('dogs/previoushomes/previoushomestile.html',
        '<bb-tile bb-tile-header="\'Previous homes\'">\n' +
        '  <bb-tile-header-content ng-show="dogPreviousHomesTile.previousHomes.length">\n' +
        '      {{ dogPreviousHomesTile.previousHomes.length }}\n' +
        '  </bb-tile-header-content>\n' +
        '  <div>\n' +
        '    <div ng-show="dogPreviousHomesTile.previousHomes">\n' +
        '      <div ng-switch="dogPreviousHomesTile.previousHomes.length || 0">\n' +
        '        <div bb-tile-section ng-switch-when="0" class="bb-no-records">\n' +
        '          This dog has no previous homes.\n' +
        '        </div>\n' +
        '        <div ng-switch-default class="bb-repeater">\n' +
        '          <div ng-repeat="previousHome in dogPreviousHomesTile.previousHomes" class="clearfix bb-repeater-item">\n' +
        '            <h4 class="pull-left">\n' +
        '              <a ng-href="{{ previousHome.constituentId | barkConstituentUrl }}" target="_blank">\n' +
        '                {{ previousHome.constituent.name }}\n' +
        '              </a>\n' +
        '            </h4>\n' +
        '            <h5 class="pull-right">\n' +
        '              {{ dogPreviousHomesTile.getSummaryDate(previousHome.fromDate) }}\n' +
        '              <span ng-show="previousHome.toDate">\n' +
        '                to {{ dogPreviousHomesTile.getSummaryDate(previousHome.toDate) }}\n' +
        '              </span>\n' +
        '            </h5>\n' +
        '          </div>\n' +
        '        </div>\n' +
        '      </div>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '  <div bb-tile-section class="text-danger" ng-show="dogPreviousHomesTile.error">\n' +
        '    Error loading previous homes.\n' +
        '  </div>\n' +
        '</bb-tile>\n' +
        '');
    $templateCache.put('index.html',
        '<!DOCTYPE html>\n' +
        '<html xmlns="http://www.w3.org/1999/xhtml">\n' +
        '\n' +
        '<head>\n' +
        '  <title>Barkbaud</title>\n' +
        '  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n' +
        '  <link rel="icon" type="image/png" href="images/favicon.ico">\n' +
        '  <link rel="stylesheet" type="text/css" href="https://sky.blackbaudcdn.net/skyux/1.6.0-5/css/sky-bundle.css">\n' +
        '  <link rel="stylesheet" type="text/css" href="css/app.css">\n' +
        '</head>\n' +
        '\n' +
        '<body>\n' +
        '  <div ng-controller="MainController as mainController">\n' +
        '    <bb-navbar>\n' +
        '      <div class="container-fluid">\n' +
        '        <ul class="nav navbar-nav navbar-left">\n' +
        '          <li ui-sref-active="bb-navbar-active">\n' +
        '            <a ui-sref="dashboard">Dashboard</a>\n' +
        '          </li>\n' +
        '        </ul>\n' +
        '        <ul class="nav navbar-nav navbar-right">\n' +
        '          <li>\n' +
        '            <a ng-click="mainController.logout()">Logout</a>\n' +
        '          </li>\n' +
        '        </ul>\n' +
        '      </div>\n' +
        '    </bb-navbar>\n' +
        '\n' +
        '    <div ui-view></div>\n' +
        '  </div>\n' +
        '\n' +
        '\n' +
        '  <script src="https://sky.blackbaudcdn.net/skyux/1.6.0-5/js/sky-bundle.min.js"></script>\n' +
        '  <script src="js/app.min.js"></script>\n' +
        '  <script src="polyfills.bundle.js"></script>\n' +
        '  <script src="vendor.bundle.js"></script>\n' +
        '  <script src="app.bundle.js"></script>\n' +
        '\n' +
        '</body>\n' +
        '</html>\n' +
        '');
    $templateCache.put('login/loginpage.html',
        '<bb-modal>\n' +
        '  <div class="modal-form modal-authorize">\n' +
        '    <bb-modal-header>Barkbaud</bb-modal-header>\n' +
        '    <div bb-modal-body>\n' +
        '      <p class="alert alert-danger" ng-if="loginPage.error" ng-switch="loginPage.error">\n' +
        '        <span ng-switch-when="access_denied">\n' +
        '          Barkbaud requires access to RENXT.\n' +
        '        </span>\n' +
        '        <span ng-switch-default>\n' +
        '          An unknown error has occurred.\n' +
        '        </span>\n' +
        '      </p>\n' +
        '      <p>Welcome to the Barkbaud Sample App.  This demo was built to showcase the Blackbaud NXT API and Blackbaud Sky UX.</p>\n' +
        '      <p>Click the Login button below to view the demo, or click the Learn More button below to visit the GitHub repo.</p>\n' +
        '    </div>\n' +
        '    <bb-modal-footer>\n' +
        '      <div ng-show="loginPage.waitingForAuth">\n' +
        '        <i class="fa fa-2x fa-spin fa-spinner" ></i> Checking authentication...\n' +
        '      </div>\n' +
        '      <div ng-hide="loginPage.waitingForAuth">\n' +
        '        <bb-modal-footer-button-primary  ng-click="loginPage.login()">\n' +
        '          Login with Blackbaud\n' +
        '        </bb-modal-footer-button-primary>\n' +
        '        <a href="https://github.com/blackbaud/barkbaud" target="_blank" class="btn bb-btn-secondary">\n' +
        '          Learn More\n' +
        '        </a>\n' +
        '      </div>\n' +
        '    </bb-modal-footer>\n' +
        '  </div>\n' +
        '</bb-modal>\n' +
        '');
}]);

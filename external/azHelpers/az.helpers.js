angular.module('az.debug', []);
angular.module('az.collapsible', []);
angular.module('az.alerts', []);
angular.module('az.dialogs', ['ngDialog', 'az.alerts']);
angular.module('az.navbar', []);
angular.module('az.authorization', []);
angular.module('az.disableDoubleSubmit', []);

angular
  .module('az.helpers', [
    'az.debug',
    'az.collapsible',
    'az.dialogs',
    'az.alerts',
    'az.navbar',
    'az.authorization',
    'az.disableDoubleSubmit',
  ])
;

// TEMPLATE CACHE
angular.module("az.helpers").run(["$templateCache", function($templateCache) {$templateCache.put("alerts/alerts.directive.html","<div ng-repeat=\"alert in vm.alerts\" class=\"alert alert-{{ alert.type }}\">\n  <button\n    type=\"button\"\n    class=\"close\"\n    ng-click=\"vm.closeAlert(alert)\"\n  >\n    <span>&times;</span>\n  </button>\n  {{ alert.text }}\n</div>\n");
$templateCache.put("dialogs/confirm.html","<h3>{{ title }}</h3>\n<p>{{ body }}</p>\n\n<button ng-click=\"closeThisDialog()\" class=\"btn btn-default\">Cancel</button>\n<button ng-click=\"confirm()\" class=\"btn btn-primary\">Ok</button>\n");
$templateCache.put("dialogs/dialog.html","<h3>{{ title }}</h3>\n<p>{{ body }}</p>\n");
$templateCache.put("debug/debug.directive.html","<div id=\"az-debug-template\" ng-show=\"azDebugVm.debugModeContainer.debugMode\">\n  <button\n    ng-if=\"!azDebugVm.showPre\"\n    ng-click=\"azDebugVm.log()\"\n  >\n    Log {{ azDebugVm.name }}\n  </button>\n\n  <div ng-if=\"azDebugVm.showPre\">\n    <code ng-click=\"azDebugVm.log()\">{{ azDebugVm.name }}</code>\n    <pre ng-click=\"azDebugVm.log()\">{{ azDebugVm.content | json }}</pre>\n  </div>\n</div>\n");
$templateCache.put("debug/toggle.directive.html","<button ng-click=\"vm.toggleDebugMode()\">\n  {{ vm.debugModeContainer.debugMode ? \'Leave Debug Mode\' : \'Enter Debug Mode\' }}\n</button>\n");
$templateCache.put("navbar/navbar.directive.html","<nav\n  class=\"az-navbar primary-nav\"\n  ng-class=\"{ navbar: vm.bootstrap, \'navbar-default\': vm.bootstrap, \'navbar-fixed-top\': vm.fixed }\"\n>\n  <div ng-class=\"{ container: vm.bootstrap }\">\n    <ul ng-class=\"{ nav: vm.bootstrap, \'navbar-nav\': vm.bootstrap }\">\n      <li\n        ng-repeat=\"primaryNavItem in vm.primaryNavItems\"\n        ng-class=\"{\n          \'active\': vm.isLinkActive(primaryNavItem, \'primary\') && vm.levels === \'1\',\n          \'active-primary\': vm.isLinkActive(primaryNavItem, \'primary\') && vm.levels === \'2\'\n        }\"\n      >\n        <a ng-if=\"primaryNavItem.href\" ng-href=\"{{ primaryNavItem.href }}\" ng-class=\"{ \'navbar-brand\': primaryNavItem.brand }\">\n          <img ng-if=\"primaryNavItem.icon\" ng-src=\"{{ primaryNavItem.icon }}\">\n          <span ng-if=\"primaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </a>\n\n        <a ng-if=\"primaryNavItem.state\" ui-sref=\"{{ primaryNavItem.state }}\" ng-class=\"{ \'navbar-brand\': primaryNavItem.brand }\">\n          <img ng-if=\"primaryNavItem.icon\" ng-src=\"{{ primaryNavItem.icon }}\">\n          <span ng-if=\"primaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </a>\n\n        <p ng-if=\"!primaryNavItem.href && !primaryNavItem.state\" class=\"navbar-text\">\n          <img ng-if=\"primaryNavItem.icon\" ng-src=\"{{ primaryNavItem.icon }}\">\n          <span ng-if=\"primaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </p>\n      </li>\n    </ul>\n    <ul ng-if=\"vm.primaryNavItems.right\" class=\"navbar-right\" ng-class=\"{ nav: vm.bootstrap, \'navbar-nav\': vm.bootstrap }\">\n      <li\n        ng-repeat=\"primaryNavItem in vm.primaryNavItems.right\"\n        ng-class=\"{\n          \'active\': vm.isLinkActive(primaryNavItem, \'primary\') && vm.levels === \'1\',\n          \'active-primary\': vm.isLinkActive(primaryNavItem, \'primary\') && vm.levels === \'2\'\n        }\"\n      >\n        <a ng-if=\"primaryNavItem.href\" ng-href=\"{{ primaryNavItem.href }}\" ng-class=\"{ \'navbar-brand\': primaryNavItem.brand }\">\n          <img ng-if=\"primaryNavItem.icon\" ng-src=\"{{ primaryNavItem.icon }}\">\n          <span ng-if=\"primaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </a>\n\n        <a ng-if=\"primaryNavItem.state\" ui-sref=\"{{ primaryNavItem.state }}\" ng-class=\"{ \'navbar-brand\': primaryNavItem.brand }\">\n          <img ng-if=\"primaryNavItem.icon\" ng-src=\"{{ primaryNavItem.icon }}\">\n          <span ng-if=\"primaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </a>\n\n        <p ng-if=\"!primaryNavItem.href && !primaryNavItem.state\" class=\"navbar-text\">\n          <img ng-if=\"primaryNavItem.icon\" ng-src=\"{{ primaryNavItem.icon }}\">\n          <span ng-if=\"primaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </p>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<nav\n  ng-if=\"vm.levels === \'2\'\"\n  class=\"az-navbar secondary-nav\"\n  ng-class=\"{ navbar: vm.bootstrap, \'navbar-default\': vm.bootstrap, \'navbar-fixed-top\': vm.fixed }\"\n>\n  <div ng-class=\"{ container: vm.bootstrap }\">\n    <ul ng-class=\"{ nav: vm.bootstrap, \'navbar-nav\': vm.bootstrap }\">\n      <li ng-repeat=\"secondaryNavItem in vm.secondaryNavItems\" ng-class=\"{ \'active\': vm.isLinkActive(secondaryNavItem, \'secondary\') }\">\n        <a ng-if=\"secondaryNavItem.href\" ng-href=\"{{ secondaryNavItem.href }}\">\n          <img ng-if=\"secondaryNavItem.icon\" ng-src=\"{{ secondaryNavItem.icon }}\">\n          <span ng-if=\"secondaryNavItem.text\">{{ secondaryNavItem.text }}</span>\n        </a>\n\n        <a ng-if=\"secondaryNavItem.state\" ui-sref=\"{{ secondaryNavItem.state }}\">\n          <img ng-if=\"secondaryNavItem.icon\" ng-src=\"{{ secondaryNavItem.icon }}\">\n          <span ng-if=\"secondaryNavItem.text\">{{ secondaryNavItem.text }}</span>\n        </a>\n\n        <p ng-if=\"!secondaryNavItem.href && !secondaryNavItem.state\" class=\"navbar-text\">\n          <img ng-if=\"secondaryNavItem.icon\" ng-src=\"{{ secondaryNavItem.icon }}\">\n          <span ng-if=\"secondaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </p>\n      </li>\n    </ul>\n\n    <ul ng-if=\"vm.secondaryNavItems.right\" class=\"navbar-right\" ng-class=\"{ nav: vm.bootstrap, \'navbar-nav\': vm.bootstrap }\">\n      <li ng-repeat=\"secondaryNavItem in vm.secondaryNavItems.right\" ng-class=\"{ \'active\': vm.isLinkActive(secondaryNavItem, \'secondary\') }\">\n        <a ng-if=\"secondaryNavItem.href\" ng-href=\"{{ secondaryNavItem.href }}\">\n          <img ng-if=\"secondaryNavItem.icon\" ng-src=\"{{ secondaryNavItem.icon }}\">\n          <span ng-if=\"secondaryNavItem.text\">{{ secondaryNavItem.text }}</span>\n        </a>\n\n        <a ng-if=\"secondaryNavItem.state\" ui-sref=\"{{ secondaryNavItem.state }}\">\n          <img ng-if=\"secondaryNavItem.icon\" ng-src=\"{{ secondaryNavItem.icon }}\">\n          <span ng-if=\"secondaryNavItem.text\">{{ secondaryNavItem.text }}</span>\n        </a>\n\n        <p ng-if=\"!secondaryNavItem.href && !secondaryNavItem.state\" class=\"navbar-text\">\n          <img ng-if=\"secondaryNavItem.icon\" ng-src=\"{{ secondaryNavItem.icon }}\">\n          <span ng-if=\"secondaryNavItem.text\">{{ primaryNavItem.text }}</span>\n        </p>\n      </li>\n    </ul>\n  </div>\n</nav>\n");}]);

// NAVBAR
(function () {
  'use strict';

  angular
    .module('az.navbar')
    .directive('azNavbar', azNavbar)
    .controller('AzNavbarCtrl', AzNavbarCtrl)
  ;

  function azNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'navbar/navbar.directive.html',
      scope: {},
      bindToController: {
        levels: '@',
        primaryNavItems: '=',
        secondaryNavItemsHash: '=',
        bootstrap: '@',
        fixed: '@',
      },
      controller: 'AzNavbarCtrl as vm',
    };
  }

  function AzNavbarCtrl(AzActiveNavItemsService, $scope) {
    var vm = this;
    vm.activeNavItems = AzActiveNavItemsService.activeNavItems;

    vm.isLinkActive = function (link, type) {
      if (link.href) {
        return link.href === vm.activeNavItems[type];
      } else if (link.state) {
        return link.state === vm.activeNavItems[type];
      }
    };

    $scope.$watch(angular.bind(this, function () {
      return this.activeNavItems.primary;
    }), function (newVal) {
      if (newVal) {
        vm.secondaryNavItems = vm.secondaryNavItemsHash[newVal];
      }
    });
  }
})();

(function () {
  'use strict';

  angular
    .module('az.navbar')
    .service('AzActiveNavItemsService', AzActiveNavItemsService)
  ;

  function AzActiveNavItemsService() {
    this.activeNavItems = {
      primary: null,
      secondary: null,
    };
  }
})();

// DISABLE DOUBLE SUBMIT
(function () {
  'use strict';

  angular
    .module('az.disableDoubleSubmit')
    .directive('azDisableDoubleSubmit', azDisableDoubleSubmit)
  ;

  function azDisableDoubleSubmit($parse, $q) {
    return {
      restrict: 'A',

      link: function (scope, iEl, iAttrs) {
        var eventName;
        var $submitButton;
        var onClickOrSubmitFunction;

        if (iEl[0].tagName === 'FORM') {
          eventName = 'submit';
          $submitButton = angular.element(iEl[0].querySelector('[type=submit]'));
          onClickOrSubmitFunction = $parse(iAttrs.onSubmit);
        } else {
          eventName = 'click';
          $submitButton = iEl;
          onClickOrSubmitFunction = $parse(iAttrs.onClick);
        }

        // 0. the user clicks the button
        iEl.on(eventName, function () {
          scope.$apply(execute);
        });

        function execute() {
          var $body = angular.element(document.body);
          var buttonTextWhileDisabled = iAttrs.buttonTextWhileDisabled;
          var buttonTextWhileEnabled = $submitButton.text();
          var onClickOrSubmitReturnValue;

          var disableEverythingOnPage = !!iAttrs.disableEverythingOnPage;
          var $lightbox = angular.element(document.querySelector('.lightbox')); // http://stackoverflow.com/questions/1298034/disable-all-the-elements-in-html

          // 1. apply the disabled state
          applyDisabledState();

          // 2. run the function
          onClickOrSubmitReturnValue = onClickOrSubmitFunction(scope);
          onClickOrSubmitReturnValue = $q.when(onClickOrSubmitReturnValue);

          // 3. remove the disabled state when the functions promise resolves
          onClickOrSubmitReturnValue
            .then(removeDisabledState)
            .catch(removeDisabledState)
          ;

          function applyDisabledState() {
            $submitButton.prop('disabled', true);
            $body.addClass('disable-double-submit');
            $submitButton.addClass('disable-double-submit');

            if (disableEverythingOnPage) {
              $body.addClass('disable-everything-on-page');
              $lightbox.addClass('lightbox-enabled');
            }

            if (buttonTextWhileDisabled) {
              $submitButton.text(buttonTextWhileDisabled);
            }
          }

          function removeDisabledState(response) {
            $submitButton.prop('disabled', false);
            $body.removeClass('disable-double-submit');
            $submitButton.removeClass('disable-double-submit');

            if (disableEverythingOnPage) {
              $body.removeClass('disable-everything-on-page');
              $lightbox.removeClass('lightbox-enabled');
            }

            if (buttonTextWhileDisabled) {
              $submitButton.text(buttonTextWhileEnabled);
            }

            return response;
          }
        }
      },
    };
  }
})();

// DIALOGS
(function () {
  'use strict';

  angular
    .module('az.dialogs')
    .service('AzDialogService', AzDialogService)
  ;

  function AzDialogService(ngDialog, $timeout, AzAlertService) {
    var self = this;

    self.dialog = function (options) {
      return ngDialog.open({
        template: options.template || 'dialogs/dialog.html',
        controller: function ($scope) {
          $scope.title = options.title;
          $scope.body = options.body;
        },
      });
    };

    self.confirm = function (options) {
      return ngDialog.openConfirm({
        template: options.template || 'dialogs/confirm.html',
        controller: function ($scope) {
          $scope.title = options.title;
          $scope.body = options.body;
        },
      });
    };

    self.remind = function (options) {
      var callback;
      if (options.reminderType === 'dialog') {
        callback = function () {
          return self.dialog({
            title: options.title,
            body: options.body,
          });
        };
      } else if (options.reminderType === 'confirm') {
        callback = function () {
          return self.confirm({
            title: options.title,
            body: options.body,
          });
        };
      } else if (options.reminderType === 'jsAlert') {
        callback = function () {
          if (options.title) {
            alert(options.title + '\n\n' + options.body);
          } else if (!options.title) {
            alert(options.body);
          }
        };
      } else if (options.reminderType === 'alertMessage') {
        callback = function () {
          return AzAlertService.addAlert(options.text, options.type);
        };
      }

      return $timeout(callback, options.millisecondsUntilReminder);
    };

    return self;
  }
})();

// DEBUG
(function () {
  'use strict';

  angular
    .module('az.debug')
    .directive('azDebug', azDebug)
  ;

  function azDebug() {
    return {
      restrict: 'E',
      templateUrl: 'debug/debug.directive.html',
      scope: {},
      bindToController: {
        name: '@',
        content: '=',
        showPre: '@',
      },
      controller: 'AzDebugCtrl as azDebugVm',
    };
  }

})();

(function () {
  'use strict';

  angular
    .module('az.debug')
    .controller('AzDebugCtrl', AzDebugCtrl)
  ;

  function AzDebugCtrl(AzDebugModeService) {
    var vm = this;

    window.azDebug = {};

    vm.debugModeContainer = AzDebugModeService.debugModeContainer;

    vm.log = function () {
      console.log(vm.name);
      console.log(vm.content);
      window.azDebug[vm.name] = vm.content;
    };
  }
})();

(function () {
  'use strict';

  angular
    .module('az.debug')
    .service('AzDebugModeService', AzDebugModeService)
  ;

  function AzDebugModeService() {
    this.debugModeContainer = {
      debugMode: false,
    };
  }
})();

(function () {
  'use strict';

  angular
    .module('az.debug')
    .directive('azDebugToggle', azDebugToggle)
  ;

  function azDebugToggle() {
    return {
      restrict: 'E',
      templateUrl: 'debug/toggle.directive.html',
      controller: 'AzToggleDebugModeCtrl as vm',
    };
  }
})();

(function () {
  'use strict';

  angular
    .module('az.helpers')
    .controller('AzToggleDebugModeCtrl', AzToggleDebugModeCtrl)
  ;

  function AzToggleDebugModeCtrl(AzDebugModeService) {
    var vm = this;

    vm.toggleDebugMode = function () {
      AzDebugModeService.debugModeContainer.debugMode = !AzDebugModeService.debugModeContainer.debugMode;
    };

    vm.debugModeContainer = AzDebugModeService.debugModeContainer;
  }
})();

// COLLAPSIBLE
(function () {
  'use strict';

  angular
    .module('az.collapsible')
    .directive('azCollapsible', azCollapsible)
    .controller('CollapsibleCtrl', CollapsibleCtrl)
  ;

  function azCollapsible() {
    return {
      restrict: 'A',
      transclude: true,
      controller: 'CollapsibleCtrl as vm',
      template: [
                  '<span ng-click="vm.toggleCollapse()" class="az-collapsible">',
                    '{{ vm.collapsed ? "+" : "-" }}',
                  '</span>',
                  '<ng-transclude ng-hide="vm.collapsed"></ng-transclude>',
                ].join(''),
    };
  }

  function CollapsibleCtrl() {
    var vm = this;
    vm.collapsed = false;
    vm.toggleCollapse = function () {
      vm.collapsed = !vm.collapsed;
    };
  }
})();

// AUTHORIZATION
(function () {
  'use strict';

  angular
    .module('az.authorization')
    .run(azAuthorization)
  ;

  function azAuthorization($rootScope) {
    $rootScope.isAuthorized = function (requirements) {
      var permissions = $rootScope.loggedInUser ? $rootScope.loggedInUser.permissions : [];
      var requirement;

      for (var i = 0, len = requirements.length; i < len; i++) {
        requirement = requirements[i];

        if (permissions.indexOf(requirement) === -1) {
          return false;
        }
      }

      return true;
    };

    // ui router
    $rootScope.$on('$stateChangeStart', function (e, toState) {
      if (toState.authRequirements) {
        if (!$rootScope.isAuthorized(toState.authRequirements)) {
          e.preventDefault();
          alert('You are not authorized to view this state.');
        }
      }
    });

    // ngRoute
    // $rootScope.$on('$routeChangeStart', function (e, next) {
    //   var authRequirements = next.$$route.authRequirements;
    //
    //   if (authRequirements) {
    //     if (!$rootScope.isAuthorized(authRequirements)) {
    //       e.preventDefault();
    //       alert('You are not authorized to view this state.');
    //     }
    //   }
    // });
  }
})();

// ALERTS
(function () {
  'use strict';

  angular
    .module('az.alerts')
    .directive('azAlerts', azAlerts)
  ;

  function azAlerts() {
    return {
      restrict: 'E',
      templateUrl: 'alerts/alerts.directive.html',

      controller: function (AzAlertService) {
        var vm = this;

        vm.alerts = AzAlertService.alerts;

        vm.closeAlert = function (alert) {
          AzAlertService.closeAlert(alert);
        };
      },
      controllerAs: 'vm',
    };
  }
})();

(function () {
  'use strict';

  angular
    .module('az.alerts')
    .service('AzAlertService', AzAlertService)
  ;

  function AzAlertService() {
    var service = {};
    service.alerts = [];

    service._conditionallyAddAlert = function (newText, newType) {
      var currentAlert;

      // check if the alert is already visible
      for (var i = 0, len = service.alerts.length; i < len; i++) {
        currentAlert = service.alerts[i];

        if (currentAlert.text === newText && currentAlert.type === newType) {
          return false;
        }
      }

      service.alerts.push({
        text: newText,
        type: newType,
      });

      return true;
    };

    service.addAlert = function (text, type) {
      var successfullyAdded = service._conditionallyAddAlert(text, type);
      if (!successfullyAdded) {
        console.info('This following alert is already visible. text: ' + text + ', type: ' + type);
      }
    };

    service.addAlerts = function (alerts) {
      alerts.forEach(function (alert) {
        service.addAlert(alert.text, alert.type);
      });
    };

    service.closeAlert = function (alertToRemove) {
      var currentAlert;

      for (var i = 0, len = service.alerts.length; i < len; i++) {
        currentAlert = service.alerts[i];

        if (angular.equals(currentAlert, alertToRemove)) {
          service.alerts.splice(i, 1);
          break;
        }
      }
    };

    return service;
  }
})();

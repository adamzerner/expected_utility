(function () {
  'use strict';

  angular
    .module('ev')
    .config(setUpRoutes)
  ;

  function setUpRoutes($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(false);

    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'action/form/action.form.html',
        controller: 'ActionFormCtrl as actionFormVm',
      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: 'action/form/action.form.html',
        controller: 'ActionFormCtrl as actionFormVm',
      })
      .state('index', {
        url: '/',
        templateUrl: 'action/index/action.index.html',
        controller: 'IndexActionCtrl as indexActionVm',
      })
      .state('show', {
        url: '/show/:id',
        templateUrl: 'action/show/action.show.html',
        controller: 'ShowActionCtrl as showActionVm',
      })
      .state('compare', {
        url: '/compare',
        templateUrl: 'compare/compare.html',
        controller: 'CompareCtrl as compareVm',
        params: {
          actionIds: {
            array: true,
          },
        },
        resolve: {
          actions: function ($stateParams, ActionService) {
            var actions = [];
            for (var i = 0, len = $stateParams.actionIds.length; i < len; i++) {
              actions.push(ActionService.actions[$stateParams.actionIds[i]]);
            }
            return actions;
          },
          actionsInfoContainer: function ($stateParams) {
            var actionsInfoContainer = [];

            for (var i = 0, len = $stateParams.actionIds.length; i < len; i++) {
              actionsInfoContainer.push({});
            }

            return actionsInfoContainer;
          },
          actionNames: function ($stateParams, ActionService) {
            var actionNames = [];
            for (var i = 0, len = $stateParams.actionIds.length; i < len; i++) {
              actionNames.push(ActionService.actions[$stateParams.actionIds[i]].name);
            }
            return actionNames;
          },
        },
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about/about.html',
      })
    ;
  }
})();

(function () {
  'use strict';

  angular
    .module('ev')
    .config(setUpRoutes)
  ;

  function setUpRoutes($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: '/action/form/action.form.html',
        controller: 'ActionFormCtrl as actionFormVm',
      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: '/action/form/action.form.html',
        controller: 'ActionFormCtrl as actionFormVm',
      })
      .state('index', {
        url: '/',
        templateUrl: '/action/index/action.index.html',
        controller: 'IndexActionCtrl as indexActionVm',
      })
      .state('show', {
        url: '/show/:id',
        templateUrl: '/action/show/action.show.html',
        controller: 'ShowActionCtrl as showActionVm',
      })
      .state('compare', {
        url: '/compare',
        templateUrl: '/compare/compare.html',
        controller: 'CompareCtrl as compareVm',
      })
    ;
  }
})();

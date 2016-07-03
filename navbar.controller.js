(function () {
  'use strict';

  angular
    .module('ev')
    .controller('NavbarCtrl', NavbarCtrl)
  ;

  function NavbarCtrl() {
    var vm = this;
    vm.primaryNavItems = [
      {
        text: 'List Of Actions',
        state: 'index',
      }, {
        text: 'Create An Action',
        state: 'create',
      }, {
        text: 'About',
        state: 'about',
      },
    ];
  }
})();

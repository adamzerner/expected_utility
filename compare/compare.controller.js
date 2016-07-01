(function () {
  'use strict';

  angular
    .module('ev')
    .controller('CompareCtrl', CompareCtrl)
  ;

  function CompareCtrl() {
    var vm = this;
    vm.foo = 'compare';
  }
})();

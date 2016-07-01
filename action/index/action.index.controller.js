(function () {
  'use strict';

  angular
    .module('ev')
    .controller('IndexActionCtrl', IndexActionCtrl)
  ;

  function IndexActionCtrl(ActionService, AzDialogService, ngDialog) {
    var vm = this;
    vm.actions = ActionService.actions;
    vm.isOpen = new Array(false);
    vm.deleteAction = function (id) {
      AzDialogService
        .confirm({
          title: 'Are you sure?',
        })
        .then(function () {
          ActionService.deleteAction(id);
        })
      ;
    };
    vm.showOutcomesChart = function (outcomes) {
      ngDialog.open({
        templateUrl: 'outcomes_chart/outcomes.chart.template.html',
        data: {
          outcomes: outcomes,
        },
      });
    };
  }
})();

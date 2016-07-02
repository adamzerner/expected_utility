(function () {
  'use strict';

  angular
    .module('ev')
    .controller('IndexActionCtrl', IndexActionCtrl)
  ;

  function IndexActionCtrl(ActionService, AzDialogService, ngDialog, $state) {
    var vm = this;
    vm.actions = ActionService.actions;
    vm.actionIds = {};
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
    vm.compare = function () {
      var actionIds = [];
      for (var key in vm.actionIds) {
        if (vm.actionIds[key]) {
          actionIds.push(+key);
        }
      }

      $state.go('compare', { actionIds: actionIds });
    };
  }
})();

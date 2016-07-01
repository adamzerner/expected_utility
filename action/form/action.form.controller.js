(function () {
  'use strict';

  angular
    .module('ev')
    .controller('ActionFormCtrl', ActionFormCtrl)
  ;

  function ActionFormCtrl(ActionService, $state, AzAlertService, $stateParams) {
    var vm = this;
    vm.action = {};
    vm.action.outcomes = [];
    vm.tempOutcome = {};
    vm.actionFormSubmitAttempted = false;
    vm.outcomeFormSubmitAttempted = false;
    if ($stateParams.id) {
      vm.mode = 'edit';
      vm.action = angular.copy(ActionService.actions[$stateParams.id]);
    } else {
      vm.mode = 'create';
    }

    vm.addOutcome = function (valid) {
      if (!valid) {
        AzAlertService.addAlert('The outcome you attempted to add is invalid. See the error messages below.', 'danger');
        vm.outcomeFormSubmitAttempted = true;
        return;
      }

      vm.action.outcomes.push(vm.tempOutcome);
      vm.tempOutcome = {};
      vm.outcomeFormSubmitAttempted = false;
    };

    vm.validateProbabilitiesAddTo100 = function (action) {
      var totalProbability = 0;
      action.outcomes.forEach(function (outcome) {
        totalProbability += outcome.probability;
      });

      if (totalProbability !== 100) {
        return 'The sum of the probabilities must add up to 100.';
      }

      return 'valid';
    };

    vm.createAction = function (valid) {
      if (!valid) {
        AzAlertService.addAlert('The action you tried to create is invalid. See the error messages below.', 'danger');
        vm.actionFormSubmitAttempted = true;
        return;
      }

      var validateProbabilitiesAddTo100Result = vm.validateProbabilitiesAddTo100(vm.action);
      if (validateProbabilitiesAddTo100Result !== 'valid') {
        AzAlertService.addAlert(validateProbabilitiesAddTo100Result, 'danger');
        return;
      }

      ActionService.createAction(vm.action);
      $state.go('index');
    };

    vm.updateAction = function (valid) {
      if (!valid) {
        AzAlertService.addAlert('The edited action is invalid. See the error messages below.', 'danger');
        vm.actionFormSubmitAttempted = true;
        return;
      }

      var validateProbabilitiesAddTo100Result = vm.validateProbabilitiesAddTo100(vm.action);
      if (validateProbabilitiesAddTo100Result !== 'valid') {
        AzAlertService.addAlert(validateProbabilitiesAddTo100Result, 'danger');
        return;
      }

      ActionService.updateAction($stateParams.id, vm.action);
      $state.go('index');
    };
  }
})();

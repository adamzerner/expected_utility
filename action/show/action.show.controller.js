(function () {
  'use strict';

  angular
    .module('ev')
    .controller('ShowActionCtrl', ShowActionCtrl)
  ;

  function ShowActionCtrl($stateParams, ActionService, ChartService) {
    var vm = this;
    vm.action = ActionService.actions[$stateParams.id];

    vm.simulationData = {
      totalUtilons: 0,
      simulationsRan: 0,
      outcomes: [],
    };

    vm.action.outcomes.forEach(function (outcome) {
      vm.simulationData.outcomes.push({
        name: outcome.name,
        count: 0,
      });
    });

    vm.chartData = ChartService.getChartData(vm.action.outcomes, 'simulation');
    vm.series = [];

    vm.simulationRunner = {};
    vm.simulationRunner.simulationsToRun = 1;
    vm.simulationRunner._getOutcome = function () {
      var pair;
      var randomNumber = Math.random() * 100; // generate random number 0-100 inclusive

      for (var i = 0, len = vm.action.probabilityRangeArray.length; i < len; i++) {
        pair = vm.action.probabilityRangeArray[i];
        if (randomNumber >= pair[0] && randomNumber <= pair[1]) {
          return vm.action.outcomes[i];
        }
      }
    };
    vm.simulationRunner._runSimulation = function () {
      var simulationDataOutcome;
      var outcome = vm.simulationRunner._getOutcome();
      vm.simulationData.totalUtilons += outcome.expectedUtility;
      vm.simulationData.simulationsRan++;

      for (var i = 0, len = vm.simulationData.outcomes.length; i < len; i++) {
        simulationDataOutcome = vm.simulationData.outcomes[i];
        if (simulationDataOutcome.name === outcome.name) {
          simulationDataOutcome.count++;
          ChartService.incrementChartOutcome(vm.chartData, simulationDataOutcome.name, vm.series);
          break;
        }
      }
    };
    vm.simulationRunner.runSimulations = function () {
      for (var i = 0; i < vm.simulationRunner.simulationsToRun; i++) {
        vm.simulationRunner._runSimulation();
      }
    };
  }
})();

(function () {
  'use strict';

  angular
    .module('ev')
    .controller('ShowActionCtrl', ShowActionCtrl)
  ;

  function ShowActionCtrl($stateParams, ActionService, ChartService, SimulationService) {
    var vm = this;
    vm.series = [];
    vm.action = ActionService.actions[$stateParams.id];
    vm.chartData = ChartService.getChartData(vm.action.outcomes, 'simulation');
    vm.simulationsToRun = 1;

    vm.simulationData = {
      totalUtilons: 0,
      simulationsRan: 0,
      outcomes: [],
    };

    // set up simulationData.outcomes so we could count them
    vm.action.outcomes.forEach(function (outcome) {
      vm.simulationData.outcomes.push({
        name: outcome.name,
        count: 0,
      });
    });

    vm.runSimulation = function () {
      SimulationService.runSimulation(vm.simulationData, vm.action, vm.chartData, vm.series);
    };
    vm.runSimulations = function () {
      SimulationService.runSimulations(vm.simulationsToRun, vm.simulationData, vm.action, vm.chartData, vm.series);
    };
  }
})();

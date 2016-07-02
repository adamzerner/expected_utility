(function () {
  'use strict';

  angular
    .module('ev')
    .controller('CompareCtrl', CompareCtrl)
  ;

  function CompareCtrl(actions, actionsInfoContainer, actionNames, ChartService, SimulationService) {
    var vm = this;
    vm.actions = actions;
    vm.actionNames = actionNames;
    vm.actionsInfoContainer = actionsInfoContainer;
    vm.averageUtilonsArray = [];
    vm.simulationsToRun = 1;

    vm.actionsInfoContainer.forEach(function (actionInfo, index) {
      actionInfo.name = vm.actions[index].name;
      actionInfo.outcomes = vm.actions[index].outcomes;
      actionInfo.series = [];
      actionInfo.chartData = ChartService.getChartData(vm.actions[index].outcomes, 'simulation');
      actionInfo.simulationData = {
        totalUtilons: 0,
        simulationsRan: 0,
        outcomes: [],
      };

      // set up actionInfo.simulationData.outcomes so we could count them
      vm.actions[index].outcomes.forEach(function (outcome) {
        actionInfo.simulationData.outcomes.push({
          name: outcome.name,
          count: 0,
        });
      });

      // set up averageUtilonsArray
      vm.averageUtilonsArray.push(0);
    });

    vm.runSimulation = function () {
      vm.actionsInfoContainer.forEach(function (actionInfo, index) {
        SimulationService.runSimulation(actionInfo.simulationData, vm.actions[index], actionInfo.chartData, actionInfo.series);
        vm.averageUtilonsArray[index] = actionInfo.simulationData.totalUtilons / actionInfo.simulationData.simulationsRan;
      });
    };

    vm.runSimulations = function () {
      vm.actionsInfoContainer.forEach(function (actionInfo, index) {
        SimulationService.runSimulations(vm.simulationsToRun, actionInfo.simulationData, vm.actions[index], actionInfo.chartData, actionInfo.series);
        vm.averageUtilonsArray[index] = actionInfo.simulationData.totalUtilons / actionInfo.simulationData.simulationsRan;
      });
    };
  }
})();

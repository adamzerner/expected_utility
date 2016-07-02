(function () {
  'use strict';

  angular
    .module('ev')
    .service('SimulationService', SimulationService)
  ;

  function SimulationService(ChartService) {
    var service = {};

    service.getRandomOutcome = function (action) {
      var pair;
      var randomNumber = Math.random() * 100; // generate random number 0-100 inclusive

      for (var i = 0, len = action.probabilityRangeArray.length; i < len; i++) {
        pair = action.probabilityRangeArray[i];
        if (randomNumber >= pair[0] && randomNumber <= pair[1]) {
          return action.outcomes[i];
        }
      }
    };

    service.runSimulation = function (simulationData, action, chartData, series) {
      var outcome = service.getRandomOutcome(action);
      simulationData.totalUtilons += outcome.expectedUtility;
      simulationData.simulationsRan++;

      // increment the count of the outcome
      for (var i = 0, len = simulationData.outcomes.length; i < len; i++) {
        if (simulationData.outcomes[i].name === outcome.name) {
          simulationData.outcomes[i].count++;
          ChartService.incrementChartOutcome(chartData, simulationData.outcomes[i].name, series);
          break;
        }
      }
    };

    service.runSimulations = function (simulationsToRun, simulationData, action, chartData, series) {
      for (var i = 0; i < simulationsToRun; i++) {
        service.runSimulation(simulationData, action, chartData, series);
      }
    };

    return service;
  }
})();

(function () {
  'use strict';

  angular
    .module('ev')
    .directive('evSimulationTable', evSimulationTable)
  ;

  function evSimulationTable() {
    return {
      restrict: 'E',
      templateUrl: '/simulation/simulation_table.directive.html',
      scope: {
        simulationData: '=',
      },
    };
  }
})();

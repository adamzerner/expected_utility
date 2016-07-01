(function () {
  'use strict';

  angular
    .module('ev')
    .directive('evOutcomes', evOutcomes)
  ;

  function evOutcomes() {
    return {
      restrict: 'E',
      templateUrl: '/outcomes/outcomes.directive.html',
      scope: {
        outcomes: '=',
        remove: '@',
      },
      controller: function ($scope) {
        $scope.removeOutcome = function (index) {
          $scope.outcomes.splice(index, 1);
        };
      },
    };
  }
})();

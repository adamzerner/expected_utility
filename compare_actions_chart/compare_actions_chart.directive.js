(function () {
  'use strict';

  angular
    .module('ev')
    .directive('evCompareActionsChart', evCompareActionsChart)
  ;

  function evCompareActionsChart() {
    return {
      restrict: 'E',
      templateUrl: '/compare_actions_chart/compare_actions_chart.directive.html',
      scope: {
        categories: '=',
        data: '=',
      },
      controller: function ($scope) {
        $scope.config = {
          series: [
            {
              name: 'one',
              data: $scope.data,
            },
          ],
          options: {
            chart: {
              type: 'column',
            },
            title: {
              text: '',
            },
            xAxis: {
              categories: $scope.categories,
            },
            yAxis: {
              title: {
                text: 'Average Utilons',
              },
            },
            legend: {
              enabled: false,
            },
          },
        };
      },
    };
  }
})();

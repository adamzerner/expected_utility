(function () {
  'use strict';

  angular
    .module('ev')
    .directive('evOutcomesChart', evOutcomesChart)
  ;

  function evOutcomesChart() {
    return {
      restrict: 'E',
      templateUrl: '/outcomes_chart/outcomes.chart.directive.html',
      scope: {
        outcomes: '=?',
        series: '=?',
      },
      controller: function ($scope, ChartService) {
        var newSeries;
        if ($scope.series) {
          $scope.chartData = ChartService.getChartData($scope.outcomes, 'simulation');
        } else {
          $scope.series = [];
          $scope.chartData = ChartService.getChartData($scope.outcomes);
        }
        newSeries = ChartService.makeSeries($scope.chartData);
        angular.copy(newSeries, $scope.series);

        $scope.chartConfig = {
          series: $scope.series,
          options: {
            chart: {
              type: 'area',
            },
            title: {
              text: null,
            },
            xAxis: {
              tickLength: 0,
              labels: { enabled: false },
              maxPadding: 0,
            },
            yAxis: {
              title: { enabled: false },
            },
            plotOptions: {
              area: {
                marker: {
                  enabled: false,
                  states: {
                    hover: { enabled: false },
                  },
                },
              },
            },
            tooltip: {
              followPointer: true,
              useHTML: true,
              headerFormat: '<span style="color: {series.color}">{series.name}</span>: ',
              pointFormat: '<span>{series.options.w} x {series.options.h}</span>',
            },
          },
        };
      },
    };
  }
})();

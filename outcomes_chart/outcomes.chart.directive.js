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
        var xAxisTitle;
        if ($scope.series) {
          $scope.chartData = ChartService.getChartData($scope.outcomes, 'simulation');
          xAxisTitle = 'Number of occurrences';
        } else {
          $scope.series = [];
          $scope.chartData = ChartService.getChartData($scope.outcomes);
          xAxisTitle = 'Probability of occurring';
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
              title: {
                text: xAxisTitle,
              },
            },
            yAxis: {
              title: {
                text: 'Expected Utility',
              },
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

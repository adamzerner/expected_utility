(function () {
  'use strict';

  angular
    .module('ev')
    .service('ChartService', ChartService)
  ;

  function ChartService() {
    var service = {};

    service.getChartData = function (outcomes, type) {
      var chartData = [];
      var obj;

      outcomes.forEach(function (outcome) {
        obj = {};
        obj.name = outcome.name;
        obj.y = outcome.expectedUtility;
        if (type === 'simulation') {
          obj.x = 0;
        } else {
          obj.x = outcome.probability / 100;
        }

        chartData.push(obj);
      });

      return chartData;
    };

    service.incrementChartDataOutcome = function (chartData, outcomeName) {
      for (var i = 0, len = chartData.length; i < len; i++) {
        if (chartData[i].name === outcomeName) {
          chartData[i].x++;
          return;
        }
      }
    };

    service.incrementChartOutcome = function (chartData, outcomeName, series) {
      service.incrementChartDataOutcome(chartData, outcomeName);
      var newSeries = service.makeSeries(chartData);
      angular.copy(newSeries, series);
    };

    // http://stackoverflow.com/a/20569702/1927876
    service.makeSeries = function (listOfData) {
      var sumX = 0.0;
      for (var i = 0; i < listOfData.length; i++) {
        sumX += listOfData[i].x;
      }
      var gap = sumX / listOfData.length * 0.2;
      var allSeries = [];
      var x = 0.0;
      for (var i = 0; i < listOfData.length; i++) {
        var data = listOfData[i];
        allSeries[i] = {
          name: data.name,
          data: [
            [x, 0], [x, data.y],
            {
              x: x + data.x / 2.0,
              y: data.y,
              dataLabels: { enabled: true, format: data.x + ' x {y}' },
            },
            [x + data.x, data.y], [x + data.x, 0],
          ],
          w: data.x,
          h: data.y,
        };
        x += data.x + gap;
      }
      return allSeries;
    };

    return service;
  }
})();

(function () {
  'use strict';

  angular
    .module('ev')
    .service('ActionService', ActionService)
  ;

  function ActionService(MockActions) {
    var service = {};

    service.actions = MockActions;

    service._calculateExpectedUtility = function (action) {
      action.expectedUtility = 0;

      action.outcomes.forEach(function (outcome) {
        action.expectedUtility += outcome.expectedUtility * (outcome.probability / 100);
      });

      return action;
    };

    service._setUpProbabilityRangeArray = function (action) {
      // used to run simulations
      // [ [0, 20], [20, 70], [70, 100] ]

      var previous = 0;
      action.probabilityRangeArray = [];

      action.outcomes.forEach(function (outcome) {
        action.probabilityRangeArray.push([
          previous,
          previous + outcome.probability,
        ]);
        previous += outcome.probability;
      });

      return action;
    };

    service.createAction = function (action) {
      action.id = Object.keys(service.actions).length;
      action = service._calculateExpectedUtility(action);
      action = service._setUpProbabilityRangeArray(action);
      service.actions[action.id] = action;
    };

    service.updateAction = function (id, updatedAction) {
      updatedAction = service._calculateExpectedUtility(updatedAction);
      updatedAction = service._setUpProbabilityRangeArray(updatedAction);
      service.actions[id] = updatedAction;
    };

    service.deleteAction = function (id) {
      delete service.actions[id];
    };

    return service;
  }
})();

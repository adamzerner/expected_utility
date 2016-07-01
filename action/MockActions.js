(function () {
  'use strict';

  var expectedUtility = {};
  expectedUtility.safe = null;
  expectedUtility.injury = null;
  expectedUtility.death = null;

  var driving = {
    0: {
      id: 0,
      name: 'Drive with Colt (drunk)',
      expectedUtility: null,
      probabilityRangeArray: null,
      outcomes: [
        {
          name: 'Get home safely',
          expectedUtility: expectedUtility.safe,
          probability: null,
        }, {
          name: 'Injury',
          expectedUtility: expectedUtility.injury,
          probability: null,
        }, {
          name: 'Death',
          expectedUtility: expectedUtility.death,
          probability: null,
        },
      ],
    },

    1: {
      id: 1,
      name: 'Drive with Alex (high)',
      expectedUtility: null,
      probabilityRangeArray: null,
      outcomes: [
        {
          name: 'Get home safely',
          expectedUtility: expectedUtility.safe,
          probability: null,
        }, {
          name: 'Injury',
          expectedUtility: expectedUtility.injury,
          probability: null,
        }, {
          name: 'Death',
          expectedUtility: expectedUtility.death,
          probability: null,
        },
      ],
    },

    2: {
      id: 2,
      name: 'Drive with Jake (sober)',
      expectedUtility: null,
      probabilityRangeArray: null,
      outcomes: [
        {
          name: 'Get home safely',
          expectedUtility: expectedUtility.safe,
          probability: null,
        }, {
          name: 'Injury',
          expectedUtility: expectedUtility.injury,
          probability: null,
        }, {
          name: 'Death',
          expectedUtility: expectedUtility.death,
          probability: null,
        },
      ],
    },

    3: {
      id: 0,
      name: 'Drive with Adam (not a good driver + no license)',
      expectedUtility: null,
      probabilityRangeArray: null,
      outcomes: [
        {
          name: 'Get home safely',
          expectedUtility: expectedUtility.safe,
          probability: null,
        }, {
          name: 'Injury',
          expectedUtility: expectedUtility.injury,
          probability: null,
        }, {
          name: 'Death',
          expectedUtility: expectedUtility.death,
          probability: null,
        },
      ],
    },
  };

  var livingOptions = {
    0: {
      id: 0,
      name: 'Thailand',
      expectedUtility: 67,
      probabilityRangeArray: [
        [0, 20], [20, 60], [60, 80], [80, 90], [90, 100],
      ],
      outcomes: [
        {
          name: 'Love it',
          expectedUtility: 90,
          probability: 20,
        }, {
          name: 'Like it',
          expectedUtility: 75,
          probability: 40,
        }, {
          name: 'It\'s ok',
          expectedUtility: 60,
          probability: 20,
        }, {
          name: 'Dislike it',
          expectedUtility: 40,
          probability: 10,
        }, {
          name: 'Hate it',
          expectedUtility: 30,
          probability: 10,
        },
      ],
    },

    1: {
      id: 1,
      name: 'Vegas',
      expectedUtility: 64,
      probabilityRangeArray: [
        [0, 5], [5, 45], [45, 85], [85, 95], [95, 100],
      ],
      outcomes: [
        {
          name: 'Love it',
          expectedUtility: 90,
          probability: 5,
        }, {
          name: 'Like it',
          expectedUtility: 75,
          probability: 40,
        }, {
          name: 'It\'s ok',
          expectedUtility: 60,
          probability: 40,
        }, {
          name: 'Dislike it',
          expectedUtility: 40,
          probability: 10,
        }, {
          name: 'Hate it',
          expectedUtility: 30,
          probability: 5,
        },
      ],
    },

    2: {
      id: 2,
      name: 'Home in NY',
      expectedUtility: 48,
      probabilityRangeArray: [
        [0, 1], [1, 3], [3, 38], [38, 98], [98, 100],
      ],
      outcomes: [
        {
          name: 'Love it',
          expectedUtility: 90,
          probability: 1,
        }, {
          name: 'Like it',
          expectedUtility: 75,
          probability: 2,
        }, {
          name: 'It\'s ok',
          expectedUtility: 60,
          probability: 35,
        }, {
          name: 'Dislike it',
          expectedUtility: 40,
          probability: 60,
        }, {
          name: 'Hate it',
          expectedUtility: 30,
          probability: 2,
        },
      ],
    },
  };

  angular
    .module('ev')
    .value('MockActions', livingOptions)
  ;
})();

(function() {
  'use strict';

  angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.message = '';

    $scope.checkDishes = function() {
      if ($scope.dishes) {
        var dishesList = $scope.dishes.split(',');
        dishesList = dishesList.filter(entry => entry.trim().length > 0);
        $scope.message = dishesList.length <=3 ? 'Enjoy!' : 'Too much!';
      } else {
        $scope.message = 'Please enter data first';
      }
    };
  }
})();
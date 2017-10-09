(function() {
  'use strict';

  angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.message = '';
    $scope.inputStyle = '';
    $scope.messageStyle = '';

    $scope.checkDishes = function() {
      if ($scope.dishes) {
        var numDishes = getDishesCount($scope.dishes);

        if (numDishes <=3) {
          $scope.message = 'Enjoy!';
          setStyles('valid');
        } else {
          $scope.message = 'Too much!';
          setStyles('invalid');
        }
      } else {
        $scope.message = 'Please enter data first';
        setStyles('invalid');
      }
    };

    function getDishesCount(dishesText) {
      var dishesList = dishesText.split(',');
      dishesList = dishesList.filter(entry => entry.trim().length > 0);
      return dishesList.length
    }

    function setStyles(valid_invalid) {
      $scope.inputStyle = 'input-' + valid_invalid;
      $scope.messageStyle = 'message-' + valid_invalid;
    }
  }
})();
(function () {
  'use strict';

  angular
  .module('ShoppingListCheckOff', [])
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.itemName = "";
    toBuy.itemQuantity = "";
    toBuy.itemCount = 0;

    toBuy.addItem = function () {
      ShoppingListCheckOffService.addItem(toBuy.itemName, toBuy.itemQuantity);
      toBuy.itemCount++;
    }

    toBuy.getItems = function () {
      var items = ShoppingListCheckOffService.getToBuyList();
      toBuy.itemCount = items.length;
      return items;
    }

    toBuy.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
      toBuy.itemCount--;
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.itemCount = 0;

    bought.getItems = function () {
      var items = ShoppingListCheckOffService.getBoughtList();
      bought.itemCount = items.length;
      return items;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    // pre-populate with some items
    var toBuyList = [
      {name: 'cheese', quantity: '1 package'},
      {name: 'milk', quantity: '1 gallon'},
      {name: 'bread', quantity: '1 loaf'},
      {name: 'bean burritos', quantity: '3'},
      {name: 'OJ', quantity: '1 carton'},
    ];
    var boughtList = [];

    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      toBuyList.push(item);
    }

    service.getToBuyList = function () {
      return toBuyList;
    }

    service.getBoughtList = function () {
      return boughtList;
    }

    service.buyItem = function (index) {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    }
  }

})();
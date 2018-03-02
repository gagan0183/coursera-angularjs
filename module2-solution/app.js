(function() {
	angular.module('ShoppingListCheckOff', [])
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController);

	ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function ToBuyController($scope, ShoppingListCheckOffService) {
		$scope.toBuy = ShoppingListCheckOffService.toBuy;

		$scope.buyItem = function(index) {
			ShoppingListCheckOffService.buyItem(index);
		}
	}

	AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
	function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
		$scope.bought = ShoppingListCheckOffService.bought;
	}

	function ShoppingListCheckOffService() {
		this.toBuy = [
			{
				name: "Cookies",
				quantity: 9
			},
			{
				name: "Chips",
				quantity: 1
			},
			{
				name: "Chocolate",
				quantity: 9
			},
			{
				name: "Cake",
				quantity: 9
			},
			{
				name: "Muffin",
				quantity: 9
			}
		];
		this.bought = [];

		this.buyItem = function(index) {
			var item = this.toBuy[index];
			this.toBuy.splice(index, 1);
			this.bought.push({
				name: item.name,
				quantity: item.quantity
			});
		}
	}
})();
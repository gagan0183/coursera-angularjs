(function() {
	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.directive('foundItems', FoundItems);

	function FoundItems() {
		var ddo = {
			templateUrl: 'foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			}
		};
		return ddo;
	}

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		var list = this;

		list.narrow = function() {
			MenuSearchService.getMatchedMenuItems(list.searchTerm).then(function(result) {
				list.found = result;
			});
		}

		list.onRemove = function(index) {
			list.found.splice(index, 1);
		}
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http) {
		var service = this;

		this.getMatchedMenuItems = function(searchTerm) {
			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
			})
			.then(function(result) {
				var items = result.data.menu_items;
				var foundItems = [];
				if(searchTerm != "") {
					for(let i = 0; i < items.length; i++) {
						if(items[i].description.search(searchTerm) > 0) {
							foundItems.push(items[i]);
						}
				}
				}
				return foundItems;
			}, function(error) {
				console.log(error);
			});
		};
	}	
})();
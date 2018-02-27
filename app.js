(function() {
	angular.module('App', [])
		.controller('AppController', function($scope) {
			$scope.calculateNumber = function() {
				var totalValue = 0;
				for (var i = 0 ; i < $scope.name.length ; i++) {
					totalValue += $scope.name.charCodeAt(i);
				}
				$scope.totalValue = totalValue;
			}
		});	
})();
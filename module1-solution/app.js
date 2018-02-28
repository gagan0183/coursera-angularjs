(function() {
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', function($scope) {
			var message = document.getElementById("message");
			
			$scope.process = function() {
				if($scope.lunchMenu === undefined || $scope.lunchMenu === "" || $scope.lunchMenu.length === 0) {
					message.innerHTML = "Please enter data first";
				}
				else {
					var lunchItems = $scope.lunchMenu.split(",");
					if(lunchItems.length <= 3) {
						message.innerHTML = "Enjoy!";
					}
					else {
						message.innerHTML = "Too much!";
					}
				}			
			}
		});	
})();
angular.module('myApp', []).controller('myController', function($scope){


	$scope.items = [
		{id: 1, text: 'Bench Press', bought: false},
		{id: 2, text: 'Dumbbell Fly', bought: true},
		{id: 3, text: 'Inclined Bench Press', bought: false}
	];

	$scope.getTotalItems = function() {
		return $scope.items.length;
	}

	$scope.clearBought = function() {
		$scope.items = _.filter($scope.items, function(item) {
			return !item.bought;
		});
	}

	$scope.addItem = function() {
		$scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1) });
		$scope.itemEntry = '';
	}

	$scope.isBought = function(bought) {
		return (bought) ? 'bought' : 'not-bought';
	}

	$scope.itemSlug = function(text) {
		return text.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
	}

});
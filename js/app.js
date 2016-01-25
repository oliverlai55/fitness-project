function ShopCtrl($scope){

	$scope.items = [
		{id: 1, text: 'Bench Press', bought: false},
		{id: 2, text: 'Incline Fly', bought: true},
		{id: 3, text: 'Decline Barbell Bench Press', bought: false}
	];

	$scope.clearBought = function(){
		$scope.items = _.filter($scope.items, function(item){
			return !item.bought;
		});
	}

	$scope.addItem = function(){
		$scope.items.push({text: $scope.itemEntry, bought: false, id: ($scope.items.length + 1)});
		$scope.itemEntry = '';
	}
}
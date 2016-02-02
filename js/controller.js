angular.module('myApp', []).controller('myController', function($scope){

function List(name, type, sets, reps, breaktime){
	this.name = name;
	this.type = type;
	this.sets = sets;
	this.reps = reps;
	this.breaktime = breaktime;
}

var listArray = [];
listArray.push(new List("Flat Barbell Bench Press","Chest","4","10-15","1 mins"));
listArray.push(new List("Incline Dumbbell Bench Press","Chest","3","12-15","1 mins"));
listArray.push(new List("Decline Barbell Bench Press","Chest","4","12","1 mins"));

$scope.lists = listArray;

});
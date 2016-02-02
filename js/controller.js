angular.module('myApp', []).controller('myController', function($scope){

function House(name, type, sets, reps, breaktime){
	this.name = name;
	this.type = type;
	this.sets = sets;
	this.reps = reps;
	this.breaktime = breaktime;
}
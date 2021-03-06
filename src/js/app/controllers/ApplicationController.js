"use strict";

app.controller('ApplicationController', ['$injector', '$scope', '$rootScope', 'DataService',
	function($injector, $scope, $rootScope, DataService) {
		DataService.fetch().then(function(data){
			$scope.application = data.application;
			$scope.date = new Date();
			$scope.company = data.company;
			$scope.social = data.social;
			$scope.person = data.person;
		});
	}]
);

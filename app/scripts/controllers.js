'use strict';

var drugDoseFrameworkControllers = angular.module('DrugDoseFrameworkControllers', []);

drugDoseFrameworkControllers.controller('DrugListCtrl', function($scope, $http) {
        
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drugs = [];

    $http.get('data/example.json').success(function(data) {
        $scope.drugs = data;
    });

});
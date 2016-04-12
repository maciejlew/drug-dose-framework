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
    
    $scope.showDetails = function(drugId) {
        location.href = '/#/drugs/' + drugId;
    };
    
    $scope.calculateDose = function(drugId) {
        location.href = '/#/drugs/dose/' + drugId;
    };

});

drugDoseFrameworkControllers.controller('DrugDetailsCtrl', function($scope, $routeParams, $http) {
        
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drug = null;

    $http.get('data/' + $routeParams.drugId + '.json').success(function(data) {
        var factory = new DrugFactory();
        $scope.drug = factory.getDrugFromJson(data);
    });

});

drugDoseFrameworkControllers.controller('DrugDoseCtrl', function($scope, $routeParams, $http) {
        
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drug = null;

    $http.get('data/' + $routeParams.drugId + '.json').success(function(data) {
        var factory = new DrugFactory();
        $scope.drug = factory.getDrugFromJson(data);
    });
    
    $scope.dose = null;
    $scope.weight = null;
    
    $scope.calculateDose = function () {
        $scope.dose = 'xx.xx [mg]';
        $scope.weight = 'xx.xx [kg]';
    };

});
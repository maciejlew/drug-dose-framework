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
    
    var drug_factory = new DrugFactory();
    var calculator = new DoseCalculator();
    
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drug = null;

    $http.get('data/' + $routeParams.drugId + '.json').success(function(data) {
        $scope.drug = drug_factory.getDrugFromJson(data);
        var strategy_factory = new DoseStrategyFactory();
        var strategy = strategy_factory.getStrategy($scope.drug.getParameters());
        strategy.setDoseParameters($scope.drug.getParameters());
        calculator.setStrategy(strategy);
    });

    $scope.input = {
        weight: 75
    };
    
    $scope.calculateDose = function (input) {
        try {
            var dose = calculator.calculate(new Number(input.weight));
            alert("Dose: " + dose.getMin() + " - " + dose.getMax() + " [mg]");
        } catch (ex) {
            alert("Exception: " + ex.toString());
        }
    };

});
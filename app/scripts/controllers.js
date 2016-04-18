'use strict';

var drugDoseFrameworkControllers = angular.module('DrugDoseFrameworkControllers', []);

drugDoseFrameworkControllers.controller('DrugListCtrl', function ($scope, $http) {

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drugs = [];

    $http.get('data/example.json').success(function (data) {
        $scope.drugs = data;
    });

});

drugDoseFrameworkControllers.controller('DrugDetailsCtrl', function ($scope, $state, $http) {

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drug = null;

    $http.get('data/' + $state.params.drugId + '.json').success(function (data) {
        var factory = new DrugFactory();
        $scope.drug = factory.getDrugFromJson(data);
    });

});

drugDoseFrameworkControllers.controller('DrugDoseCtrl', function ($scope, $state, $http, $ionicModal) {

    var drug_factory = new DrugFactory();
    var calculator = new DoseCalculator();

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.drug = null;

    $http.get('data/' + $state.params.drugId + '.json').success(function (data) {
        $scope.drug = drug_factory.getDrugFromJson(data);
        var strategy_factory = new DoseStrategyFactory();
        var strategy = strategy_factory.getStrategy($scope.drug.getParameters());
        strategy.setDoseParameters($scope.drug.getParameters());
        calculator.setStrategy(strategy);
    });

    $scope.input = {
        weight: 75
    };

    $scope.dose = null;
    $scope.exception = null;

    $scope.calculateDose = function (input) {
        try {
            $scope.dose = calculator.calculate(new Number(input.weight));
            $scope.modal_dose.show();
        } catch (ex) {
            $scope.exception = ex.toString();
            $scope.modal_exception.show();
        }
    };

    $ionicModal.fromTemplateUrl('partials/drug-dose-result.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal_dose = modal;
    });

    $scope.closeDoseModal = function () {
        $scope.modal_dose.hide();
    };

    $scope.$on('$destroy', function () {
        $scope.modal_dose.remove();
    });

    $ionicModal.fromTemplateUrl('partials/drug-dose-exception.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal_exception = modal;
    });

    $scope.closeExceptionModal = function () {
        $scope.modal_exception.hide();
    };

    $scope.$on('$destroy', function () {
        $scope.modal_exception.remove();
    });

});
'use strict';
(function(){
    
    var dependencies = ['ionic', 'ngRoute', 'DrugDoseFrameworkControllers'];
    
    var app = angular.module('DrugDoseFrameworkApp', dependencies).run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
    
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/drugs', {
            templateUrl: 'partials/drug-list.html',
            controller: 'DrugListCtrl'
        }).when('/drugs/:drugId', {
            templateUrl: 'partials/drug-details.html',
            controller: 'DrugDetailsCtrl'
        }).when('/drugs/dose/:drugId', {
            templateUrl: 'partials/drug-dose.html',
            controller: 'DrugDoseCtrl'
        }).otherwise({
            redirectTo: '/drugs'
        });
    }]);
    
})();

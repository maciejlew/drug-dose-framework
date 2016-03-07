'use strict';
(function(){
    var app = angular.module('DrugDoseFrameworkApp', ['ionic']).run(function ($ionicPlatform) {
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
    
    app.controller('DrugListCtrl', function($scope) {
        
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;
        
        $scope.drugs = drugs;
    });
    
    var drugs = [
        {
            name: 'Drug1',
            description: 'Description of a Drug1'
        },
        {
            name: 'Drug2',
            description: 'Description of a Drug2'
        },
        {
            name: 'Drug3',
            description: 'Description of a Drug3'
        }
    ];
    
})();

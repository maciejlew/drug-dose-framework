'use strict';
(function () {

    var dependencies = ['gettext', 'ionic', 'ui.router', 'DrugDoseFrameworkControllers'];

    var app = angular.module('DrugDoseFrameworkApp', dependencies).run(function ($ionicPlatform, gettextCatalog) {

        switch (window.navigator.language.substr(0, 2)) {
            case 'pl':
                gettextCatalog.setCurrentLanguage('pl_PL');
                break;
            case 'de':
                gettextCatalog.setCurrentLanguage('de_DE');
                break;
        }

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

    app.directive('placeholder', ['gettextCatalog', function (gettextCatalog) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.attr('placeholder', gettextCatalog.getString(attrs.placeholder));
            }
        };
    }]);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('drugs', {
            url: '/drugs/',
            templateUrl: 'partials/drug-list.html',
            controller: 'DrugListCtrl'
        }).state('drug-details', {
            url: '/drugs/:drugId',
            templateUrl: 'partials/drug-details.html',
            controller: 'DrugDetailsCtrl'
        }).state('drug-dose', {
            url: '/drugs/dose/:drugId',
            templateUrl: 'partials/drug-dose.html',
            controller: 'DrugDoseCtrl'
        });
        $urlRouterProvider.otherwise("/drugs/");
    });

})();

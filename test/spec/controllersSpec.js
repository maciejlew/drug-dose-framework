'use strict';

describe('Drug Dose Framework controllers', function() {
    
    
    describe('DrugListCtrl', function() {
        
        var scope, $httpBackend;
        
        beforeEach(module('DrugDoseFrameworkControllers'));
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/example.json').respond(example);

            scope = $rootScope.$new();
            $controller('DrugListCtrl', {$scope: scope});
        }));

        it('should create "drugs" model with 3 drugs', function() {
            expect(scope.drugs.length).toBe(0);
            $httpBackend.flush();
            expect(scope.drugs.length).toBe(3);
            expect(scope.drugs).toEqual(example);
        });

    });
    
    describe('DrugDetailsCtrl', function () {
        
        var scope, $httpBackend;

        beforeEach(module('ngRoute'));
        beforeEach(module('DrugDoseFrameworkControllers'));
        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('data/xyz.json').respond({id: 'xyz'});

            $routeParams.drugId = 'xyz';
            scope = $rootScope.$new();
            $controller('DrugDetailsCtrl', {$scope: scope});
        }));

        it('should fetch drug detail', function () {
            expect(scope.drug).toBeNull();
            $httpBackend.flush();
            expect(scope.drug).toEqual({id: 'xyz'});
        });
    });
    
    var example = [
        {
            name: "Drug one",
            description: "Description of a Drug1"
        },
        {
            name: "Drug two",
            description: "Description of a Drug2"
        },
        {
            name: "Drug three",
            description: "Description of a Drug3"
        }
    ];
    
});

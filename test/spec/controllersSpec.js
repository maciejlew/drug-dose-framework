'use strict';

describe('Drug Dose Framework controllers', function() {
    
    
    describe('DrugListCtrl', function() {
        
        var scope, $httpBackend;
        
        beforeEach(module('DrugDoseFrameworkApp'));
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

'use strict';

describe('Drug Dose Framework controllers', function() {
    
    beforeEach(module('DrugDoseFrameworkApp'));
    
    describe('DrugListCtrl', function() {

        it('should create "drugs" model with 3 drugs', inject(function($controller) {
            var scope = {};
            $controller('DrugListCtrl', {$scope:scope});
            expect(scope.drugs.length).toBe(3);
        }));

    });
    
});

'use strict';

describe('Dose Calculator', function() {
    
    it('should set strategy when strategy is simple', function() {
        var calculator = new DoseCalculator();
        var strategy = new DoseSimpleStrategy();
        expect(function () {calculator.setStrategy(strategy);}).not.toThrow();
    });
    
    it('should set strategy when strategy is complex', function() {
        var calculator = new DoseCalculator();
        var strategy = new DoseComplexStrategy();
        expect(function () {calculator.setStrategy(strategy);}).not.toThrow();
    });
    
    it('should not set strategy whet its not simple nor complex', function() {
        var calculator = new DoseCalculator();
        var strategy = {};
        var expected_exception = new TypeError('Unknown strategy type!');
        expect(function() {calculator.setStrategy(strategy);}).toThrow(expected_exception);
    });
    
    it('should calculate dose when strategy is set', function() {
        var calculator = new DoseCalculator();
        var strategy = new DoseSimpleStrategy();
        var parameters = new DoseSimpleParameters();
        var dose = null;
        parameters.setAMax(1);
        parameters.setAMin(1);
        parameters.setB(0);
        strategy.setDoseParameters(parameters);
        calculator.setStrategy(strategy);
        dose = calculator.calculate(3);
        expect(dose.getMax()).toEqual(3);
        expect(dose.getMin()).toEqual(3);
    });
    
    it('should not calculate dose when strategy is not set', function() {
        var calculator = new DoseCalculator();
        var expected_exception = new TypeError('Unknown strategy type!');
        expect(function() {calculator.calculate(3);}).toThrow(expected_exception);
    });
    
});
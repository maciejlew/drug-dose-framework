'use strict';

describe('Dose Strategy', function() {

    it('should throw an exception when setting parameters', function() {
        var dose_strategy = new DoseStrategy();
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new Error('Abstract method!');
        expect(function() {dose_strategy.setDoseParameters(dose_parameters);}).toThrow(expected_exception);
    });
    
    it('should throw an exception when calculating dose', function() {
        var dose_strategy = new DoseStrategy();
        var expected_exception = new Error('Abstract method!');
        expect(function() {dose_strategy.calculateDose(new Number(10));}).toThrow(expected_exception);
    });
    
    it('should throw an exception when parsing non number weight', function() {
        var dose_strategy = new DoseStrategy();
        var expected_exception = new TypeError('Weight must be number!');
        expect(function() {dose_strategy.checkWeightType(null);}).toThrow(expected_exception);
        expect(function() {dose_strategy.checkWeightType('string');}).toThrow(expected_exception);
        expect(function() {dose_strategy.checkWeightType([]);}).toThrow(expected_exception);
        expect(function() {dose_strategy.checkWeightType({});}).toThrow(expected_exception);
    });
    
    it('should not throw an exception when parsing positive number weight', function() {
        var dose_strategy = new DoseStrategy();
        dose_strategy.checkWeightType(1);
        dose_strategy.checkWeightType(1.0);
        dose_strategy.checkWeightType(new Number(1));
    });
    
    it('should throw an exception when parsing negative number weight', function() {
        var dose_strategy = new DoseStrategy();
        var expected_exception = new RangeError('Weight must be positive number!');
        expect(function() {dose_strategy.checkWeightType(-1);}).toThrow(expected_exception);
        expect(function() {dose_strategy.checkWeightType(-1.0);}).toThrow(expected_exception);
        expect(function() {dose_strategy.checkWeightType(new Number(-1));}).toThrow(expected_exception);
    });
    
});
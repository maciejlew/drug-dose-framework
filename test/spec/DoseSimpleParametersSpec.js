'use strict';

describe('Dose Simple Parameters', function() {

    it('should set "a_min" dose when "a_min" is a number', function() {
        var dose_parameters = new DoseSimpleParameters();
        expect(dose_parameters.getAMin()).toBeNull();
        dose_parameters.setAMin(12);
        expect(dose_parameters.getAMin()).toEqual(12);
        dose_parameters.setAMin(11.11);
        expect(dose_parameters.getAMin()).toEqual(11.11);
    });

    it('should not set "a_min" when "a_min" is not a number', function() {
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new TypeError('Dose parameter value must be numeric!');
        expect(dose_parameters.getAMin()).toBeNull();
        expect(function() {dose_parameters.setAMin('string');}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMin(true);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMin(false);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMin([]);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMin({});}).toThrow(expected_exception);
        expect(dose_parameters.getAMin()).toBeNull();
    });
    
    it('should set "a_max" dose when "a_max" is a number', function() {
        var dose_parameters = new DoseSimpleParameters();
        expect(dose_parameters.getAMax()).toBeNull();
        dose_parameters.setAMax(12);
        expect(dose_parameters.getAMax()).toEqual(12);
        dose_parameters.setAMax(11.11);
        expect(dose_parameters.getAMax()).toEqual(11.11);
    });

    it('should not set "a_max" when "a_max" is not a number', function() {
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new TypeError('Dose parameter value must be numeric!');
        expect(dose_parameters.getAMax()).toBeNull();
        expect(function() {dose_parameters.setAMax('string');}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMax(true);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMax(false);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMax([]);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setAMax({});}).toThrow(expected_exception);
        expect(dose_parameters.getAMax()).toBeNull();
    });

    it('should set "b" dose when "b" is a number', function() {
        var dose_parameters = new DoseSimpleParameters();
        expect(dose_parameters.getB()).toBeNull();
        dose_parameters.setB(12);
        expect(dose_parameters.getB()).toEqual(12);
        dose_parameters.setB(11.11);
        expect(dose_parameters.getB()).toEqual(11.11);
    });

    it('should not set "b" when "b" is not a number', function() {
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new TypeError('Dose parameter value must be numeric!');
        expect(dose_parameters.getB()).toBeNull();
        expect(function() {dose_parameters.setB('string');}).toThrow(expected_exception);
        expect(function() {dose_parameters.setB(true);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setB(false);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setB([]);}).toThrow(expected_exception);
        expect(function() {dose_parameters.setB({});}).toThrow(expected_exception);
        expect(dose_parameters.getB()).toBeNull();
    });
    
    it('should not set "a_min" when "a_min" is greater than "a_max"', function() {
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new RangeError('Dose parameter a_min can not be greater than a_max parameter!');
        dose_parameters.setAMax(10);
        expect(dose_parameters.getAMax()).toEqual(10);
        expect(dose_parameters.getAMin()).toBeNull();
        expect(function() {dose_parameters.setAMin(11);}).toThrow(expected_exception);
        expect(dose_parameters.getAMin()).toBeNull();
    });
    
    it('should not set "a_max" when "a_max" is smaller than "a_min"', function() {
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new RangeError('Dose parameter a_max can not be smaller than a_min parameter!');
        dose_parameters.setAMin(10);
        expect(dose_parameters.getAMin()).toEqual(10);
        expect(dose_parameters.getAMax()).toBeNull();
        expect(function() {dose_parameters.setAMax(9);}).toThrow(expected_exception);
        expect(dose_parameters.getAMax()).toBeNull();
    });

});
'use strict';

describe('Dose Complex Parameters', function() {

    it('should set ranges when all ranges are integer numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var integer_ranges = [1, 2, 3];
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(integer_ranges);
        expect(dose_parameters.getRanges()).toEqual(integer_ranges);
    });
    
    it('should set ranges when all ranges are float numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var float_ranges = [1.0, 2.0, 3.0];
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(float_ranges);
        expect(dose_parameters.getRanges()).toEqual(float_ranges);
    });
    
    it('should not set ranges when at least one range is not a number', function() {
        var dose_parameters = new DoseComplexParameters();
        var invalid_ranges = [1, 2, '3'];
        var expected_exception = new TypeError('Range parameter value must be numeric!');
        expect(dose_parameters.getRanges()).toEqual([]);
        expect(function() {dose_parameters.setRanges(invalid_ranges);}).toThrow(expected_exception);
        expect(dose_parameters.getRanges()).toEqual([]);
    });
    
    it('should set doses when all doses are integer numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var integer_doses = [1, 2, 3];
        expect(dose_parameters.getDoses()).toEqual([]);
        dose_parameters.setDoses(integer_doses);
        expect(dose_parameters.getDoses()).toEqual(integer_doses);
    });
    
    it('should set doses when all doses are float numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var float_doses = [1.0, 2.0, 3.0];
        expect(dose_parameters.getDoses()).toEqual([]);
        dose_parameters.setDoses(float_doses);
        expect(dose_parameters.getDoses()).toEqual(float_doses);
    });
    
    it('should not set doses when at least one range is not a number', function() {
        var dose_parameters = new DoseComplexParameters();
        var invalid_doses = [1, 2, '3'];
        var expected_exception = new TypeError('Dose parameter value must be numeric!');
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(function() {dose_parameters.setDoses(invalid_doses);}).toThrow(expected_exception);
        expect(dose_parameters.getDoses()).toEqual([]);
    });
    
    it('should not set doses when doses amount and ranges amount differs', function() {
        var dose_parameters = new DoseComplexParameters();
        var ranges  = [1, 2, 3];
        var doses_deficit = [1, 2];
        var doses_surplus = [1, 2, 3, 4];
        var expected_exception = new RangeError('Dose parameters amount and ranges parameters differs!');
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(ranges);
        expect(dose_parameters.getRanges()).toEqual(ranges);
        expect(function() {dose_parameters.setDoses(doses_deficit);}).toThrow(expected_exception);
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(function() {dose_parameters.setDoses(doses_surplus);}).toThrow(expected_exception);
        expect(dose_parameters.getDoses()).toEqual([]);
    });
    
    it('should not set doses when doses amount and ranges amount differs', function() {
        var dose_parameters = new DoseComplexParameters();
        var ranges  = [1, 2, 3];
        var doses_deficit = [1, 2];
        var doses_surplus = [1, 2, 3, 4];
        var expected_exception = new RangeError('Dose parameters amount and ranges parameters differs!');
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(ranges);
        expect(dose_parameters.getRanges()).toEqual(ranges);
        expect(function() {dose_parameters.setDoses(doses_deficit);}).toThrow(expected_exception);
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(function() {dose_parameters.setDoses(doses_surplus);}).toThrow(expected_exception);
        expect(dose_parameters.getDoses()).toEqual([]);
    });
    
    it('should not set ranges when doses amount and ranges amount differs', function() {
        var dose_parameters = new DoseComplexParameters();
        var doses  = [1, 2, 3];
        var ranges_deficit = [1, 2];
        var ranges_surplus = [1, 2, 3, 4];
        var expected_exception = new RangeError('Dose parameters amount and ranges parameters differs!');
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setDoses(doses);
        expect(dose_parameters.getDoses()).toEqual(doses);
        expect(function() {dose_parameters.setRanges(ranges_deficit);}).toThrow(expected_exception);
        expect(dose_parameters.getRanges()).toEqual([]);
        expect(function() {dose_parameters.setRanges(ranges_surplus);}).toThrow(expected_exception);
        expect(dose_parameters.getRanges()).toEqual([]);
    });
    
    it('should not set ranges when ranges are not in ascending order', function() {
        var dose_parameters = new DoseComplexParameters();
        var ranges = [1, 2, 1.5];
        var expected_exception = new RangeError('Ranges are not in ascending order!');
        expect(dose_parameters.getRanges()).toEqual([]);
        expect(function() {dose_parameters.setRanges(ranges);}).toThrow(expected_exception);
    });

});
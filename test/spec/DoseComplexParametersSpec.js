'use strict';

describe('Dose Complex Parameters', function() {

    it('should set ranges when all ranges are integer numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var integer_ranges = [1, 2, 3];
        var number_ranges = [new Number(1), new Number(2), new Number(3)];
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(integer_ranges);
        expect(dose_parameters.getRanges()).toEqual(number_ranges);
    });
    
    it('should set ranges when all ranges are float numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var float_ranges = [1.0, 2.0, 3.0];
        var number_ranges = [new Number(1), new Number(2), new Number(3)];
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(float_ranges);
        expect(dose_parameters.getRanges()).toEqual(number_ranges);
    });
    
    it('should set ranges when all ranges are numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var number_ranges = [new Number(1), new Number(2), new Number(3)];
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(number_ranges);
        expect(dose_parameters.getRanges()).toEqual(number_ranges);
    });
    
    it('should set ranges when ranges are mixed numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var number_ranges = [new Number(1), new Number(2), new Number(3)];
        var mixed_ranges = [1, 2.0, new Number(3)];
        expect(dose_parameters.getRanges()).toEqual([]);
        dose_parameters.setRanges(mixed_ranges);
        expect(dose_parameters.getRanges()).toEqual(number_ranges);
    });
    
    it('should not set ranges when at least one range is not a number', function() {
        var dose_parameters = new DoseComplexParameters();
        var invalid_ranges = [new Number(1), new Number(2), '3'];
        var expected_exception = new TypeError('Range parameter value must be numeric!');
        expect(dose_parameters.getRanges()).toEqual([]);
        expect(function() {dose_parameters.setRanges(invalid_ranges);}).toThrow(expected_exception);
        expect(dose_parameters.getRanges()).toEqual([]);
    });
    
    it('should set doses when all doses are integer numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var integer_doses = [1, 2, 3];
        var number_doses = [new Number(1), new Number(2), new Number(3)];
        expect(dose_parameters.getDoses()).toEqual([]);
        dose_parameters.setDoses(integer_doses);
        expect(dose_parameters.getDoses()).toEqual(number_doses);
    });
    
    it('should set doses when all doses are float numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var float_doses = [1.0, 2.0, 3.0];
        var number_doses = [new Number(1), new Number(2), new Number(3)];
        expect(dose_parameters.getDoses()).toEqual([]);
        dose_parameters.setDoses(float_doses);
        expect(dose_parameters.getDoses()).toEqual(number_doses);
    });
    
    it('should set doses when all doses are numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var number_doses = [new Number(1), new Number(2), new Number(3)];
        expect(dose_parameters.getDoses()).toEqual([]);
        dose_parameters.setDoses(number_doses);
        expect(dose_parameters.getDoses()).toEqual(number_doses);
    });
    
    it('should set doses when doses are mixed numbers', function() {
        var dose_parameters = new DoseComplexParameters();
        var number_doses = [new Number(1), new Number(2), new Number(3)];
        var mixed_doses = [1, 2.0, new Number(3)];
        expect(dose_parameters.getDoses()).toEqual([]);
        dose_parameters.setDoses(mixed_doses);
        expect(dose_parameters.getDoses()).toEqual(number_doses);
    });
    
    it('should not set doses when at least one range is not a number', function() {
        var dose_parameters = new DoseComplexParameters();
        var invalid_doses = [new Number(1), new Number(2), '3'];
        var expected_exception = new TypeError('Dose parameter value must be numeric!');
        expect(dose_parameters.getDoses()).toEqual([]);
        expect(function() {dose_parameters.setDoses(invalid_doses);}).toThrow(expected_exception);
        expect(dose_parameters.getDoses()).toEqual([]);
    });
    
    it('should not set doses when doses amount and ranges amount differs', function() {
        var dose_parameters = new DoseComplexParameters();
        var ranges  = [new Number(1), new Number(2), new Number(3)];
        var doses_deficit = [new Number(1), new Number(2)];
        var doses_surplus = [new Number(1), new Number(2), new Number(3), new Number(4)];
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
        var ranges  = [new Number(1), new Number(2), new Number(3)];
        var doses_deficit = [new Number(1), new Number(2)];
        var doses_surplus = [new Number(1), new Number(2), new Number(3), new Number(4)];
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
        var doses  = [new Number(1), new Number(2), new Number(3)];
        var ranges_deficit = [new Number(1), new Number(2)];
        var ranges_surplus = [new Number(1), new Number(2), new Number(3), new Number(4)];
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
        var ranges = [new Number(1), new Number(2), new Number(1.5)];
        var expected_exception = new RangeError('Ranges are not in ascending order!');
        expect(dose_parameters.getRanges()).toEqual([]);
        expect(function() {dose_parameters.setRanges(ranges);}).toThrow(expected_exception);
    });

});
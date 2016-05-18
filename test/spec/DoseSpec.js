'use strict';

describe('Dose', function() {

    it('should set min dose when min is a number', function() {
        var dose = new Dose();
        expect(dose.getMin()).toBeNull();
        dose.setMin(12);
        expect(dose.getMin()).toEqual(12);
        dose.setMin(11.11);
        expect(dose.getMin()).toEqual(11.11);
    });

    it('should not set min when min is not a number', function() {
        var dose = new Dose();
        var expected_exception = new TypeError('Dose value must be numeric!');
        expect(dose.getMin()).toBeNull();
        expect(function() {dose.setMin('string');}).toThrow(expected_exception);
        expect(function() {dose.setMin(true);}).toThrow(expected_exception);
        expect(function() {dose.setMin(false);}).toThrow(expected_exception);
        expect(function() {dose.setMin([]);}).toThrow(expected_exception);
        expect(function() {dose.setMin({});}).toThrow(expected_exception);
        expect(dose.getMin()).toBeNull();
    });

    it('should set max dose when max is a number', function() {
        var dose = new Dose();
        expect(dose.getMax()).toBeNull();
        dose.setMax(12);
        expect(dose.getMax()).toEqual(12);
        dose.setMax(11.11);
        expect(dose.getMax()).toEqual(11.11);
    });

    it('should not set max when max is not a number', function() {
        var dose = new Dose();
        var expected_exception = new TypeError('Dose value must be numeric!');
        expect(dose.getMax()).toBeNull();
        expect(function() {dose.setMax('string');}).toThrow(expected_exception);
        expect(function() {dose.setMax(true);}).toThrow(expected_exception);
        expect(function() {dose.setMax(false);}).toThrow(expected_exception);
        expect(function() {dose.setMax([]);}).toThrow(expected_exception);
        expect(function() {dose.setMax({});}).toThrow(expected_exception);
        expect(dose.getMax()).toBeNull();
    });
    
    it('should not set min if min value is negative', function() {
        var dose = new Dose();
        var expected_exception = new RangeError('Dose value can not be negative!');
        expect(dose.getMin()).toBeNull();
        expect(function() {dose.setMin(-1);}).toThrow(expected_exception);
        expect(function() {dose.setMin(-1.0);}).toThrow(expected_exception);
        expect(dose.getMin()).toBeNull();
    });
    
    it('should not set max if max value is negative', function() {
        var dose = new Dose();
        var expected_exception = new RangeError('Dose value can not be negative!');
        expect(dose.getMax()).toBeNull();
        expect(function() {dose.setMax(-1);}).toThrow(expected_exception);
        expect(function() {dose.setMax(-1.0);}).toThrow(expected_exception);
        expect(dose.getMax()).toBeNull();
    });

});
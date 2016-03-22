'use strict';

describe('Dose Simple Strategy', function() {

    it('should not throw an exception when setting proper parameters', function() {
        var dose_strategy = new DoseSimpleStrategy();
        var dose_parameters = new DoseSimpleParameters();
        dose_strategy.setDoseParameters(dose_parameters);
        expect(dose_strategy.getDoseParameters()).toEqual(dose_parameters);
    });
    
    it('should throw exception when setting improper parameters', function() {
        var dose_strategy = new DoseSimpleStrategy();
        var dose_parameters = new DoseComplexParameters();
        var expected_exception = new TypeError('Wrong dose parameters!');
        expect(function() {dose_strategy.setDoseParameters(dose_parameters);}).toThrow(expected_exception);
    });
    
    it('should calculate proper dose for example Drug One', function() {
        var dose_strategy = new DoseSimpleStrategy();
        var dose_parameters = new DoseSimpleParameters();
        var dose = null;
        dose_parameters.setAMin(1);
        dose_parameters.setAMax(1);
        dose_parameters.setB(2);
        dose_strategy.setDoseParameters(dose_parameters);
        dose = dose_strategy.calculateDose(0);
        expect(dose.getMin()).toEqual(2);
        expect(dose.getMax()).toEqual(2);
        dose = dose_strategy.calculateDose(2.5);
        expect(dose.getMin()).toEqual(4.5);
        expect(dose.getMax()).toEqual(4.5);
        dose = dose_strategy.calculateDose(5);
        expect(dose.getMin()).toEqual(7);
        expect(dose.getMax()).toEqual(7);
    });
    
    it('should calculate proper dose for example Drug Two', function() {
        var dose_strategy = new DoseSimpleStrategy();
        var dose_parameters = new DoseSimpleParameters();
        var dose = null;
        dose_parameters.setAMin(0.5);
        dose_parameters.setAMax(0.6);
        dose_parameters.setB(10);
        dose_strategy.setDoseParameters(dose_parameters);
        dose = dose_strategy.calculateDose(0);
        expect(dose.getMin()).toEqual(10);
        expect(dose.getMax()).toEqual(10);
        dose = dose_strategy.calculateDose(2.5);
        expect(dose.getMin()).toEqual(11.25);
        expect(dose.getMax()).toEqual(11.50);
        dose = dose_strategy.calculateDose(5);
        expect(dose.getMin()).toEqual(12.50);
        expect(dose.getMax()).toEqual(13.00);
    });
    
});
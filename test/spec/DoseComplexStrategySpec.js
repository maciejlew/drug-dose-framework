'use strict';

describe('Dose Complex Strategy', function() {

    it('should not throw an exception when setting proper parameters', function() {
        var dose_strategy = new DoseComplexStrategy();
        var dose_parameters = new DoseComplexParameters();
        dose_strategy.setDoseParameters(dose_parameters);
        expect(dose_strategy.getDoseParameters()).toEqual(dose_parameters);
    });
    
    it('should throw exception when setting improper parameters', function() {
        var dose_strategy = new DoseComplexStrategy();
        var dose_parameters = new DoseSimpleParameters();
        var expected_exception = new TypeError('Wrong dose parameters!');
        expect(function() {dose_strategy.setDoseParameters(dose_parameters);}).toThrow(expected_exception);
    });
    
    it('should calculate proper dose for example Drug Three', function() {
        var dose_strategy = new DoseComplexStrategy();
        var dose_parameters = new DoseComplexParameters();
        var dose = null;
        dose_parameters.setRanges([12, 13, 14, 15]);
        dose_parameters.setDoses([0.5, 1, 1.25, 1.30]);
        dose_strategy.setDoseParameters(dose_parameters);
        
        dose = dose_strategy.calculateDose(12);
        expect(dose.getMin()).toEqual(0.5);
        expect(dose.getMax()).toEqual(0.5);
        
        dose = dose_strategy.calculateDose(13);
        expect(dose.getMin()).toEqual(1);
        expect(dose.getMax()).toEqual(1);
        
        dose = dose_strategy.calculateDose(14);
        expect(dose.getMin()).toEqual(1.25);
        expect(dose.getMax()).toEqual(1.25);
        
        dose = dose_strategy.calculateDose(15);
        expect(dose.getMin()).toEqual(1.30);
        expect(dose.getMax()).toEqual(1.30);
        
        dose = dose_strategy.calculateDose(14.5);
        expect(dose.getMin()).toEqual(1.275);
        expect(dose.getMax()).toEqual(1.275);
        
        dose = dose_strategy.calculateDose(12.5);
        expect(dose.getMin()).toEqual(0.75);
        expect(dose.getMax()).toEqual(0.75);
    });
    
    it('should throw exception when weight is out of range', function() {
        var dose_strategy = new DoseComplexStrategy();
        var dose_parameters = new DoseComplexParameters();
        var expected_exception = new RangeError('Weight out of range!');
        dose_parameters.setRanges([12, 13, 14, 15]);
        dose_parameters.setDoses([0.5, 1, 1.25, 1.30]);
        dose_strategy.setDoseParameters(dose_parameters);
        
        expect(function() {dose_strategy.calculateDose(11);}).toThrow(expected_exception);
        expect(function() {dose_strategy.calculateDose(16);}).toThrow(expected_exception);
    });
    
});
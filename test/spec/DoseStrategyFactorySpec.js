'use strict';

describe('Dose Strategy Factory', function() {

    it('should return simple strategy when dose parameters are simple', function() {
        var dose_strategy_factory = new DoseStrategyFactory();
        var dose_parameters = new DoseSimpleParameters();
        var dose_strategy = dose_strategy_factory.getStrategy(dose_parameters);
        expect(dose_strategy instanceof DoseSimpleStrategy).toBeTruthy();
    });
    
    it('should return complex strategy when dose parameters are complex', function() {
        var dose_strategy_factory = new DoseStrategyFactory();
        var dose_parameters = new DoseSimpleParameters();
        var dose_strategy = dose_strategy_factory.getStrategy(dose_parameters);
        expect(dose_strategy instanceof DoseSimpleStrategy).toBeTruthy();
    });
    
    it('should throw exception when dose parameters are not simple nor complex', function() {
        var dose_strategy_factory = new DoseStrategyFactory();
        var dose_parameters = { type: 'unknown' };
        var expected_exception = new TypeError('Unknown dose calculation strategy!');
        expect(function() {dose_strategy_factory.getStrategy(dose_parameters)}).toThrow(expected_exception);
    });
    
});
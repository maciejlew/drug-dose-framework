'use strict';
function DoseCalculator() {
    var _strategy = null;
    var checkStrategy = function(strategy) {
        if (!(strategy instanceof DoseSimpleStrategy) && !(strategy instanceof DoseComplexStrategy)) {
            throw new TypeError('Unknown strategy type!');
        }
    };
    this.setStrategy = function(strategy) {
        checkStrategy(strategy);
        _strategy = strategy;
    };
    this.calculate = function(weight) {
        checkStrategy(_strategy);
        return _strategy.calculateDose(weight);
    };
}
DoseCalculator.prototype = new DoseCalculator();
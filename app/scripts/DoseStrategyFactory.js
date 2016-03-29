function DoseStrategyFactory() {
    this.getStrategy = function (dose_parameters) {
        if (dose_parameters instanceof DoseSimpleParameters) {
            return new DoseSimpleStrategy();
        } else if (dose_parameters instanceof DoseComplexParameters) {
            return new DoseComplexStrategy();
        } else {
            throw new TypeError('Unknown dose calculation strategy!');
        }
    }
}
DoseStrategyFactory.prototype = new DoseStrategyFactory();
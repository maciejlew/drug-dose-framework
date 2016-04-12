function DoseCalculator() {
    this.strategy = null;
    this.setStrategy = function(strategy) {
        this.strategy = strategy;
    };
    this.calculate = function(doseParameters, weight) {
        return this.strategy.calculate(doseParameters, weight);
    };
}
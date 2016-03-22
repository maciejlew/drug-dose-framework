function DoseSimpleStrategy() {
    this.checkDoseParameters = function(dose_parameters) {
        if (!(dose_parameters instanceof DoseSimpleParameters)) {
            throw new TypeError('Wrong dose parameters!');
        }
    };
    this.calculateDose = function(weight) {
        this.checkWeightType(weight);
        var dose = new Dose();
        dose.setMin(this.getDoseParameters().getAMin() * weight + this.getDoseParameters().getB());
        dose.setMax(this.getDoseParameters().getAMax() * weight + this.getDoseParameters().getB());
        return dose;
    };
}
DoseSimpleStrategy.prototype = new DoseStrategy();
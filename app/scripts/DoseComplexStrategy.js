'use strict';
function DoseComplexStrategy() {
    var that = this;
    var checkWeightIsInRange = function(weight) {
        var ranges = that.getDoseParameters().getRanges();
        var min = ranges[0];
        var max = ranges[ranges.length - 1];
        if (!(weight >= min && weight <= max)) {
            throw new RangeError('Weight out of range!');
        }
    };
    this.checkDoseParameters = function(dose_parameters) {
        if (!(dose_parameters instanceof DoseComplexParameters)) {
            throw new TypeError('Wrong dose parameters!');
        }
    };
    this.calculateDose = function(weight) {
        this.checkWeightType(weight);
        checkWeightIsInRange(weight);
        var dose = new Dose();
        var ranges = this.getDoseParameters().getRanges();
        var doses = this.getDoseParameters().getDoses();
        var x1 = 0;
        var x2 = ranges.length - 1;
        
        var x = null;
        var closest_left = null;
        
        while (x1 < x2) {
            x = Math.floor((x1 + x2) / 2);
            if (ranges[x] < weight) {
                x1 = x + 1;
                closest_left = x;
            } else {
                closest_left = x - 1;
                x2 = x;
            }
        }
        
        if (ranges[x1] === weight) {
            dose.setMin(doses[x1]);
            dose.setMax(doses[x1]);
        } else {
            var a = (doses[x1] - doses[closest_left])/(ranges[x1] - ranges[closest_left]);
            var b = doses[x1] - a * ranges[x1];
            var y = a * weight + b;
            dose.setMin(y);
            dose.setMax(y);
        }
        return dose;
    };
}
DoseComplexStrategy.prototype = new DoseStrategy();
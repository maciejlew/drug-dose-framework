'use strict';
function DoseStrategy() {
    var _dose_parameters = null;
    this.checkWeightType = function(weight) {
        if (!(typeof weight === 'number') && !(weight instanceof Number)) {
            throw new TypeError('Weight must be number!');
        } else if (weight < 0) {
            throw new RangeError('Weight must be positive number!');
        }
    };
    this.checkDoseParameters = function(dose_parameters) {
        throw new Error('Abstract method!');
    };
    this.setDoseParameters = function (dose_parameters) {
        this.checkDoseParameters(dose_parameters);
        _dose_parameters = dose_parameters;
    };
    this.getDoseParameters = function () {
        return _dose_parameters;
    };
    this.calculateDose = function(weight) {
        throw new Error('Abstract method!');
    };
}
DoseStrategy.prototype = new DoseStrategy();
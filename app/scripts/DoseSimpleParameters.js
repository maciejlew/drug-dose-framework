'use strict';
function DoseSimpleParameters() {
    var _a_min = null;
    var _a_max = null;
    var _b = null;
    var checkType = function(value) {
        if (!(value instanceof Number) && !(typeof value === 'number')) {
            throw new TypeError('Dose parameter value must be numeric!');
        }
    };
    var checkAMinSmallerThanAMax = function(a_min) {
        if (_a_max !== null && a_min > _a_max) {
            throw new RangeError('Dose parameter a_min can not be greater than a_max parameter!');
        }
    };
    var checkAMaxGreaterThanAMin = function(a_max) {
        if (_a_min !== null && a_max < _a_min) {
            throw new RangeError('Dose parameter a_max can not be smaller than a_min parameter!');
        }
    };
    this.setAMin = function(a_min) {
        checkType(a_min);
        checkAMinSmallerThanAMax(a_min);
        if (a_min instanceof Number) {
            _a_min = a_min;
        } else if (typeof a_min === 'number') {
            _a_min = new Number(a_min);
        }
    };
    this.setAMax = function(a_max) {
        checkType(a_max);
        checkAMaxGreaterThanAMin(a_max);
        if (a_max instanceof Number) {
            _a_max = a_max;
        } else if (typeof a_max === 'number') {
            _a_max = new Number(a_max);
        }
    };
    this.setB = function(b) {
        checkType(b);
        if (b instanceof Number) {
            _b = b;
        } else if (typeof b === 'number') {
            _b = new Number(b);
        }
    };
    this.getAMin = function() {
        return _a_min;
    };
    this.getAMax = function() {
        return _a_max;
    };
    this.getB = function() {
        return _b;
    };
}
DoseSimpleParameters.prototype = new DoseSimpleParameters();
'use strict';
function Dose() {
    var _min = null;
    var _max = null;
    var checkType = function(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Dose value must be numeric!');
        }
    };
    var checkRange = function(value) {
        if (value < 0) {
            throw new RangeError('Dose value can not be negative!');
        }
    };
    this.setMin = function(min) {
        checkType(min);
        checkRange(min);
        _min = min;
    };
    this.setMax = function(max) {
        checkType(max);
        checkRange(max);
        _max = max;
    };
    this.getMin = function() {
        return _min;
    };
    this.getMax = function() {
        return _max;
    };
}
Dose.prototype = new Dose();
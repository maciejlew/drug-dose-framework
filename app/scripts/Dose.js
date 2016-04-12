'use strict';
function Dose() {
    var _min = null;
    var _max = null;
    var checkType = function(value) {
        if (!(value instanceof Number) && !(typeof value === 'number')) {
            throw new TypeError('Dose value must be numeric!');
        }
    };
    var checkRange = function(value) {
        if (value < 0) {
            throw new RangeError('Dose value can not be negative!');
        }
    }
    this.setMin = function(min) {
        checkType(min);
        checkRange(min);
        if (min instanceof Number) {
            _min = min;
        } else if (typeof min === 'number') {
            _min = new Number(min);
        }
    };
    this.setMax = function(max) {
        checkType(max);
        checkRange(max);
        if (max instanceof Number) {
            _max = max;
        } else if (typeof max === 'number') {
            _max = new Number(max);
        }
    };
    this.getMin = function() {
        return _min;
    };
    this.getMax = function() {
        return _max;
    };
}
Dose.prototype = new Dose();
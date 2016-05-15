'use strict';
function DoseComplexParameters() {
    var _ranges = [];
    var _doses = [];
    var checkType = function(value) {
        if (!(value instanceof Number) && typeof value !== 'number') {
            return false;
        } else {
            return true;
        }
    };
    var checkRangeType = function(range) {
        if (checkType(range) === false) {
            throw new TypeError('Range parameter value must be numeric!');
        }
    };
    var checkDoseType = function(dose) {
        if (checkType(dose) === false) {
            throw new TypeError('Dose parameter value must be numeric!');
        }
    };
    var checkRangesAmount = function(ranges) {
        if (_doses.length !== 0 && ranges.length !== _doses.length) {
            throw new RangeError('Dose parameters amount and ranges parameters differs!');
        }
    };
    var checkDosesAmount = function(doses) {
        if (_ranges.length !== 0 && doses.length !== _ranges.length) {
            throw new RangeError('Dose parameters amount and ranges parameters differs!');
        }
    };
    var checkRangesOrder = function(ranges, tmp, i) {
        if (i !== 0 && ranges[i] <= tmp[i-1]) {
            throw new RangeError('Ranges are not in ascending order!');
        }
    };
    this.setRanges = function(ranges) {
        checkRangesAmount(ranges);
        var tmp = [];
        for (var i = 0 ; i < ranges.length ; i++) {
            checkRangeType(ranges[i]);
            checkRangesOrder(ranges, tmp, i);
            if (ranges[i] instanceof Number) {
                tmp.push(ranges[i]);
            } else {
                tmp.push(new Number(ranges[i]));
            }
        }
        _ranges = tmp;
    };
    this.setDoses = function(doses) {
        checkDosesAmount(doses);
        var tmp = [];
        for (var i = 0 ; i < doses.length ; i++) {
            checkDoseType(doses[i]);
            if (doses[i] instanceof Number) {
                tmp.push(doses[i]);
            } else {
                tmp.push(new Number(doses[i]));
            }
        }
        _doses = tmp;
    };
    this.getRanges = function() {
        return _ranges;
    };
    this.getDoses = function() {
        return _doses;
    };
}
DoseComplexParameters.prototype = new DoseComplexParameters();
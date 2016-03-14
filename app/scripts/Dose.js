function Dose() {
    var _min = null;
    var _max = null;
    this.setMin = function(min) {
        if (min instanceof Number) {
            _min = min;
        } else if (typeof min === 'number') {
            _min = new Number(min);
        } else {
            throw new TypeError('Dose value must be numeric!');
        }
        if (_min < 0) {
            _min = null;
            throw new RangeError('Dose value can not be negative!');
        }
    };
    this.setMax = function(max) {
        if (max instanceof Number) {
            _max = max;
        } else if (typeof max === 'number') {
            _max = new Number(max);
        } else {
            throw new TypeError('Dose value must be numeric!');
        }
        if (_max < 0) {
            _max = null;
            throw new RangeError('Dose value can not be negative!');
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
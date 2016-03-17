function Drug() {
    var _name = null;
    var _description = null;
    var _type = null;
    var _parameters = null;
    var isStringType = function(value) {
        return (value instanceof String) || (typeof value === 'string');
    };
    var checkNameType = function(name) {
        if (!isStringType(name)) {
            throw new TypeError('Drug name value must be string!');
        }
    };
    var checkDescriptionType = function(description) {
        if (!isStringType(description)) {
            throw new TypeError('Drug description value must be string!');
        }
    };
    var checkTypeType = function(type) {
        if (!isStringType(type)) {
            throw new TypeError('Drug type value must be string!');
        } else if (type != 'simple' && type != 'complex') {
            throw new TypeError('Type must be simple or complex!');
        }
    };
    var checkTypeIsSet = function() {
        if (_type === null) {
            throw new Error('Drug parameters can not be set until type is not specified!');
        }
    };
    var checkParametersType = function(parameters) {
        if (!(parameters instanceof DoseComplexParameters) 
            && !(parameters instanceof DoseSimpleParameters)) {
            throw new TypeError('Drug parameters type is not valid!');
        }
    };
    var checkParametersMatchType = function(parameters) {
        if ((_type == 'simple' && (parameters instanceof DoseComplexParameters)) 
            || (_type == 'complex' && (parameters instanceof DoseSimpleParameters))) {
            throw new Error('Drug parameters type does not match drug type!');
        }
    };
    this.setName = function(name) {
        checkNameType(name);
        if (name instanceof String) {
            _name = name;
        } else if (typeof name === 'string') {
            _name = new String(name);
        }
    };
    this.setDescription = function(description) {
        checkDescriptionType(description);
        if (description instanceof String) {
            _description = description;
        } else if (typeof description === 'string') {
            _description = new String(description);
        }
    };
    this.setType = function(type) {
        checkTypeType(type);
        if (type instanceof String) {
            _type = type;
        } else if (typeof type === 'string') {
            _type = new String(type);
        }
    };
    this.setParameters = function(parameters) {
        checkTypeIsSet();
        checkParametersType(parameters);
        checkParametersMatchType(parameters);
        _parameters = parameters;
    };
    this.getName = function() {
        return _name;
    };
    this.getDescription = function() {
        return _description;
    };
    this.getType = function() {
        return _type;
    };
    this.getParameters = function() {
        return _parameters;
    };
}
Drug.prototype = new Drug();
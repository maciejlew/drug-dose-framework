function DrugFactory() {
    var getDoseParametersFromJson = function(json) {
        var parameters = null;
        switch (json.dose.type) {
            case 'simple':
                parameters = getSimpleDoseParametersFromJson(json);
                break;
            case 'complex':
                parameters = getComplexDoseParametersFromJson(json);
                break;
        }
        return parameters;
    };
    var getSimpleDoseParametersFromJson = function(json) {
        var parameters = new DoseSimpleParameters();
        if (json.dose.a.constructor === Array) {
            parameters.setAMin(json.dose.a[0]);
            parameters.setAMax(json.dose.a[1]);
        } else {
            parameters.setAMin(json.dose.a);
            parameters.setAMax(json.dose.a);
        }
        parameters.setB(json.dose.b);
        return parameters;
    };
    var getComplexDoseParametersFromJson = function(json) {
        var parameters = new DoseComplexParameters();
        parameters.setDoses(json.dose.doses);
        parameters.setRanges(json.dose.ranges);
        return parameters;
    };
    this.getDrugFromJson = function(json) {
        var drug = new Drug();
        drug.setName(json.name);
        drug.setDescription(json.description);
        drug.setType(json.dose.type);
        drug.setParameters(getDoseParametersFromJson(json));
        return drug;
    };
}
DrugFactory.prototype = new DrugFactory();
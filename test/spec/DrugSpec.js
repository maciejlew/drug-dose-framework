'use strict';

describe('Drug', function() {

    it('should set name when name is a string', function() {
        var drug = new Drug();
        expect(drug.getName()).toBeNull();
        drug.setName('abc');
        expect(drug.getName()).toEqual('abc');
    });
    
    it('should not set name when name is not a string', function() {
        var drug = new Drug();
        var expected_exception = new TypeError('Drug name value must be string!');
        expect(drug.getName()).toBeNull();
        expect(function(){drug.setName(null);}).toThrow(expected_exception);
        expect(function(){drug.setName(1);}).toThrow(expected_exception);
        expect(function(){drug.setName(1.0);}).toThrow(expected_exception);
        expect(function(){drug.setName(true);}).toThrow(expected_exception);
        expect(function(){drug.setName([]);}).toThrow(expected_exception);
        expect(function(){drug.setName({});}).toThrow(expected_exception);
        expect(drug.getName()).toBeNull();
    });
    
    it('should set description when description is a string', function() {
        var drug = new Drug();
        expect(drug.getDescription()).toBeNull();
        drug.setDescription('abc');
        expect(drug.getDescription()).toEqual('abc');
    });
    
    it('should not set description when description is not a string', function() {
        var drug = new Drug();
        var expected_exception = new TypeError('Drug description value must be string!');
        expect(drug.getDescription()).toBeNull();
        expect(function(){drug.setDescription(null);}).toThrow(expected_exception);
        expect(function(){drug.setDescription(1);}).toThrow(expected_exception);
        expect(function(){drug.setDescription(1.0);}).toThrow(expected_exception);
        expect(function(){drug.setDescription(true);}).toThrow(expected_exception);
        expect(function(){drug.setDescription([]);}).toThrow(expected_exception);
        expect(function(){drug.setDescription({});}).toThrow(expected_exception);
        expect(drug.getDescription()).toBeNull();
    });
    
    it('should set type when type is simple', function() {
        var drug = new Drug();
        expect(drug.getType()).toBeNull();
        drug.setType('simple');
        expect(drug.getType()).toEqual('simple');
    });
    
    it('should set type when type is complex', function() {
        var drug = new Drug();
        expect(drug.getType()).toBeNull();
        drug.setType('complex');
        expect(drug.getType()).toEqual('complex');
    });
    
    it('should not set type when type is not simple nor complex', function() {
        var drug = new Drug();
        var expected_exception = new TypeError('Type must be simple or complex!');
        expect(drug.getType()).toBeNull();
        expect(function(){drug.setType('unknown type');}).toThrow(expected_exception);
        expect(drug.getType()).toBeNull();
    });
    
    it('should set parameters when parameters are complex and type is complex', function() {
        var drug = new Drug();
        var parameters = new DoseComplexParameters();
        drug.setType('complex');
        expect(drug.getParameters()).toBeNull();
        drug.setParameters(parameters);
        expect(drug.getParameters()).toEqual(parameters);
    });
    
    it('should set parameters when parameters are simple and type is simple', function() {
        var drug = new Drug();
        var parameters = new DoseSimpleParameters();
        drug.setType('simple');
        expect(drug.getParameters()).toBeNull();
        drug.setParameters(parameters);
        expect(drug.getParameters()).toEqual(parameters);
    });
    
    it('should not set parameters when type is not set', function() {
        var drug = new Drug();
        var parameters_simple = new DoseSimpleParameters();
        var parameters_complex = new DoseComplexParameters();
        var expected_exception = new TypeError('Drug parameters can not be set until type is not specified!');
        expect(drug.getParameters()).toBeNull();
        expect(function(){drug.setParameters(parameters_simple);}).toThrow(expected_exception);
        expect(function(){drug.setParameters(parameters_complex);}).toThrow(expected_exception);
        expect(drug.getParameters()).toBeNull();
    });
    
    it('should not set parameters when parameters are not of type simple nor of type complex', function() {
        var drug = new Drug();
        var expected_exception = new TypeError('Drug parameters type is not valid!');
        drug.setType('simple');
        expect(drug.getParameters()).toBeNull();
        expect(function(){drug.setParameters(null);}).toThrow(expected_exception);
        expect(function(){drug.setParameters('string');}).toThrow(expected_exception);
        expect(function(){drug.setParameters(1);}).toThrow(expected_exception);
        expect(function(){drug.setParameters(1.0);}).toThrow(expected_exception);
        expect(function(){drug.setParameters(true);}).toThrow(expected_exception);
        expect(function(){drug.setParameters([]);}).toThrow(expected_exception);
        expect(function(){drug.setParameters({});}).toThrow(expected_exception);
        drug.setType('complex');
        expect(function(){drug.setParameters(null);}).toThrow(expected_exception);
        expect(function(){drug.setParameters('string');}).toThrow(expected_exception);
        expect(function(){drug.setParameters(1);}).toThrow(expected_exception);
        expect(function(){drug.setParameters(1.0);}).toThrow(expected_exception);
        expect(function(){drug.setParameters(true);}).toThrow(expected_exception);
        expect(function(){drug.setParameters([]);}).toThrow(expected_exception);
        expect(function(){drug.setParameters({});}).toThrow(expected_exception);
        expect(drug.getParameters()).toBeNull();
    });
    
    it('should not set parameters when parameters are complex and type is simple', function() {
        var drug = new Drug();
        var expected_exception = new TypeError('Drug parameters type does not match drug type!');
        var parameters = new DoseComplexParameters();
        drug.setType('simple');
        expect(drug.getParameters()).toBeNull();
        expect(function(){drug.setParameters(parameters);}).toThrow(expected_exception);
        expect(drug.getParameters()).toBeNull();
    });
    
    it('should not set parameters when parameters are complex and type is simple', function() {
        var drug = new Drug();
        var expected_exception = new TypeError('Drug parameters type does not match drug type!');
        var parameters = new DoseSimpleParameters();
        drug.setType('complex');
        expect(drug.getParameters()).toBeNull();
        expect(function(){drug.setParameters(parameters);}).toThrow(expected_exception);
        expect(drug.getParameters()).toBeNull();
    });

});
'use strict';

describe('Drug Factory', function() {
    
    it('should convert simple drug one example to drug instance', function() {
        var drug_factory = new DrugFactory();
        var json = {
            id: 'example_drug_one',
            name: 'Drug One',
            description: 'Description of a Drug One',
            dose: {
                type: 'simple',
                a: 1,
                b: 2
            }
        };
        var drug = drug_factory.getDrugFromJson(json);
        expect(drug.getName()).toEqual('Drug One');
        expect(drug.getDescription()).toEqual('Description of a Drug One');
        expect(drug.getType()).toEqual('simple');
        expect(drug.getParameters().getAMin()).toEqual(1);
        expect(drug.getParameters().getAMax()).toEqual(1);
        expect(drug.getParameters().getB()).toEqual(2);
    });
    
    it('should convert simple drug two example to drug instance', function() {
        var drug_factory = new DrugFactory();
        var json = {
            id: 'example_drug_two',
            name: 'Drug Two',
            description: 'Description of a Drug Two',
            dose: {
                type: 'simple',
                a: [0.5, 0.6],
                b: 10
            }
        };
        var drug = drug_factory.getDrugFromJson(json);
        expect(drug.getName()).toEqual('Drug Two');
        expect(drug.getDescription()).toEqual('Description of a Drug Two');
        expect(drug.getType()).toEqual('simple');
        expect(drug.getParameters().getAMin()).toEqual(0.5);
        expect(drug.getParameters().getAMax()).toEqual(0.6);
        expect(drug.getParameters().getB()).toEqual(10);
    });
    
    it('should convert complex drug three example to drug instance', function() {
        var drug_factory = new DrugFactory();
        var json = {
            id: 'example_drug_three',
            name: 'Drug Three',
            description: 'Description of a Drug Three',
            dose: {
                type: 'complex',
                ranges: [12, 13, 14, 15],
                doses: [0.5, 1, 1.25, 1.30]
            }
        };
        var drug = drug_factory.getDrugFromJson(json);
        expect(drug.getName()).toEqual('Drug Three');
        expect(drug.getDescription()).toEqual('Description of a Drug Three');
        expect(drug.getType()).toEqual('complex');
        expect(drug.getParameters().getRanges()).toEqual([12, 13, 14, 15]);
        expect(drug.getParameters().getDoses()).toEqual([0.5, 1, 1.25, 1.30]);
    });
    
});
using { ProjectONE as my } from '../db/schema.cds';

@path : '/service/ProjectONEService'
service ProjectONEService
{
    annotate Mitigations with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskManager' ] },
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] }
    ];

    annotate Risks with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskManager' ] },
        { grant : [ 'READ' ], to : [ 'RiskViewer' ] }
    ];

    entity Risks as
        projection on my.Risks;

    entity Mitigations as
        projection on my.Mitigations;
}

annotate ProjectONEService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];

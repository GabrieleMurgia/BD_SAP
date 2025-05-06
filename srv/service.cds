using { ProjectONE as my } from '../db/schema.cds';

@path : '/service/ProjectONEService'
service ProjectONEService
{
    entity Risks as
        projection on my.Risks;

    entity Mitigations as
        projection on my.Mitigations;
}

annotate ProjectONEService with @requires :
[
    'authenticated-user'
];
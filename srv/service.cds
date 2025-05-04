using { ProjectONE as my } from '../db/schema.cds';

@path : '/service/ProjectONEService'
service ProjectONEService
{
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;
}

annotate ProjectONEService with @requires :
[
    'authenticated-user'
];

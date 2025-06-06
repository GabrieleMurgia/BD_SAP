namespace ProjectONE;

entity Risks
{
    key ID : Integer;
    title : String(100);
    prio : String(5);
    descr : String(100);
    impact : Integer;
    criticality : Integer;
    Owner        : String; 
    mitigation : Association to one Mitigations;
}

entity Mitigations
{
    key ID : UUID;
    createdAt : String(100);
    createdBy : String(100);
    description : String(100);
    owner : String(100);
    timeline : String(100);
    risks : Association to many Risks on risks.mitigation = $self;
}

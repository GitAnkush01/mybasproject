namespace ankush.db;

using { managed } from '@sap/cds/common';


entity orders: managed {
    key orderid       : Integer16;
        customername  : String(120);
        contactperson : String(180) not null;
        grossamount   : Decimal(10, 2);
        currency      : String(4) not null;
}

@edm.type : 'Int16'
type Integer16 : Integer;

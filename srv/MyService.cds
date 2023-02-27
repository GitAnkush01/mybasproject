using {ankush.db as ankush} from '../db/datamodel.cds';

@path: '/sap/opu/odata/sap/API_SALES_ORDER'

service MyService {
    entity OrderSet as projection on ankush.orders;
}

sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'ankush.app.salesorderapp',
            componentId: 'OrderSetList',
            entitySet: 'OrderSet'
        },
        CustomPageDefinitions
    );
});
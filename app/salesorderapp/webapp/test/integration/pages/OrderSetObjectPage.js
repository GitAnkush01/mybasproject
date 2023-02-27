sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ankush.app.salesorderapp',
            componentId: 'OrderSetObjectPage',
            entitySet: 'OrderSet'
        },
        CustomPageDefinitions
    );
});
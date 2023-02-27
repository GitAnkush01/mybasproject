sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ankush/app/salesorderapp/test/integration/FirstJourney',
		'ankush/app/salesorderapp/test/integration/pages/OrderSetList',
		'ankush/app/salesorderapp/test/integration/pages/OrderSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderSetList, OrderSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ankush/app/salesorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetList: OrderSetList,
					onTheOrderSetObjectPage: OrderSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);
({
    fetchData: function (component) {
        component.set('v.columns', [
            {label: 'Animal name', fieldName: 'Name', type: 'text'},
            {label: 'Eats', fieldName: 'eats__c', type: 'text'},
            {label: 'Says', fieldName: 'says__c', type: 'test'},
            {label: 'ExternalId', fieldName: 'externalId__c', type: 'number'},
        ]);

        var action = component.get("c.getAnimals");
        action.setParams({});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.animals", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    createAnimal : function (component) {
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Animal__c",
            "defaultFieldValues": {
                'Name' : 'From Force',
                'Says__c' : 'Force',
                'Eats__c' : 'Force'
            }
        });
        createRecordEvent.fire();
    }
});
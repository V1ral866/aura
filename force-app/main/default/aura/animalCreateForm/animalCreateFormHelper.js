({
    createAnimal : function(component, animal) {
        let action = component.get("c.addAnimal");
		action.setParams({
			"animal": animal
		});
		action.setCallback(this, function(response){
			let state = response.getState();
			if (state === "SUCCESS") {
				component.set('v.newAnimal', { 'sobjectType': 'Animal__c', 'Name': '', 'Eats__c': '', 'Says__c': '', 'ExternaId__c': 0 });
                let newAnimalEvent = component.getEvent("newAnimalCreated");
                newAnimalEvent.fire();
			}
		});
		$A.enqueueAction(action);
    }
})

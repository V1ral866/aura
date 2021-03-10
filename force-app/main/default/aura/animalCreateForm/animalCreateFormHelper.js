({
    createAnimal : function(component, animal) {
        let action = component.get("c.addAnimal");
		console.log(' ' + animal);
		action.setParams({
			"aWrapper": animal
		});
		action.setCallback(this, function(response){
			let state = response.getState();
			if (state === "SUCCESS") {
				component.set('v.newAnimal', { 'name': '', 'eats': '', 'says': '', 'externaId': '0' });
                let newAnimalEvent = component.getEvent("newAnimalCreated");
                newAnimalEvent.fire();
			}
		});
		$A.enqueueAction(action);
    }
})

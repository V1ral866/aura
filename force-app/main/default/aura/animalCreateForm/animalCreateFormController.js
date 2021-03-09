({
    clickCreateAnimal : function(component, event, helper) {
        let validExpense = component.find('animalform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validExpense){
			let newAnimal = component.get("v.newAnimal");
			helper.createAnimal(component, newAnimal);
        }
    }
})

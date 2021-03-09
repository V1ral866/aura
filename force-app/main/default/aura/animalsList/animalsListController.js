({
    init: function (component, event, helper) {
        helper.fetchData(component);
    },

    clickForceCreate: function (component, event, helper) {
        helper.createAnimal(component);
    },

    updateAnimalList: function (component, event, helper) {
        console.log('eveents')
        helper.fetchData(component);
    }
});


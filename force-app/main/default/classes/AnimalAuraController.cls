public with sharing class AnimalAuraController {
    
    @AuraEnabled
    public static AnimalWrapper addAnimal(AnimalWrapper aWrapper) {
        Animal__c animal = unwrapAnimal(aWrapper);
        System.debug('Wrapper ' + aWrapper);
        insert animal;
        System.debug('New Id ' + animal.Id);
        return wrapAnimal(animal);
    }

    @AuraEnabled
    public static List<AnimalWrapper> getAnimals(){
        try {
            return wrapAnimals([SELECT Id, Name, Says__c, Eats__c, ExternalId__c FROM Animal__c]);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    private static Animal__c unwrapAnimal(AnimalWrapper wrapper) {
        Animal__c animal = new Animal__c();

        animal.Name = wrapper.name;
        animal.Says__c = wrapper.says;
        animal.Eats__c = wrapper.eats;
        animal.ExternalId__c = wrapper.externalId;
        return animal;
    }

    private static AnimalWrapper wrapAnimal(Animal__c animal) {
        AnimalWrapper wrapper = new AnimalWrapper();

        wrapper.id = animal.Id;
        wrapper.name = animal.Name;
        wrapper.says = animal.Says__c;
        wrapper.eats = animal.Eats__c;
        wrapper.externalId = animal.ExternalId__c;
        return wrapper;
    }

    private static List<AnimalWrapper> wrapAnimals(List<Animal__c> aList) {
        List<AnimalWrapper> wrapper = new List<AnimalWrapper>();

        for (Animal__c animal : aList) {
            wrapper.add(wrapAnimal(animal));
        }
        return wrapper;
    }

    public class AnimalWrapper{
        @AuraEnabled
        public String id {get;set;}
        @AuraEnabled
        public String name {get;set;}
        @AuraEnabled
        public String says {get;set;}
        @AuraEnabled
        public String eats {get;set;}
        @AuraEnabled
        public String externalId {get;set;}   
    }
}

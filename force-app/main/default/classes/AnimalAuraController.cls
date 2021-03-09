public with sharing class AnimalAuraController {
    
    @AuraEnabled
    public static Animal__c addAnimal(Animal__c animal) {
        insert animal;
        return animal;
    }

    @AuraEnabled
    public static List<Animal__c> getAnimals(){
        try {
            return [SELECT Id, Name, Says__c, Eats__c, ExternalId__c FROM Animal__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

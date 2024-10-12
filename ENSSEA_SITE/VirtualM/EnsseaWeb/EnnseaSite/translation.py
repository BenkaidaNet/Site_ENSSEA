from modeltranslation.translator import translator, TranslationOptions
from .models import *

class EventTranslationOptions(TranslationOptions):
    fields = ('title','comment')
translator.register(Event,EventTranslationOptions)

class DepartementsTranslation(TranslationOptions):
    fields = ('Headdepartement','discription')
translator.register(Departements,DepartementsTranslation)

class ModulesTranlstion(TranslationOptions):
    fields = ('modules',)
translator.register(Modules,ModulesTranlstion)



class EnterpreneurShipTranslation(TranslationOptions):
    fields = ('title','description')
translator.register(EnterpreneurShip,EnterpreneurShipTranslation)
class LibraryTranslation(TranslationOptions):
    fields = ('directeur','reglement')
translator.register(Biblio,LibraryTranslation)

class MembrLaboRechTranslation(TranslationOptions):
    fields = ('name','grade')
translator.register(MembrLaboRech,MembrLaboRechTranslation)

class LaboRechTranslation(TranslationOptions):
    fields = ('laboName','laboDescrp')
translator.register(LaboRech,LaboRechTranslation)

class ConventionTranslation(TranslationOptions):
    fields = ('title','discription')
translator.register(convention,ConventionTranslation)

class RelationExtrTranslation(TranslationOptions):
    fields = ('presentation','headDepartment')
translator.register(RelationsExtr,RelationExtrTranslation)

class FileServiceStageTranslation(TranslationOptions):
    fields = ('title',)
translator.register(FileServiceStage,FileServiceStageTranslation)

class serviceStageTranslation(TranslationOptions):
    fields = ('presentation','titel')
translator.register(serviceStage,serviceStageTranslation)


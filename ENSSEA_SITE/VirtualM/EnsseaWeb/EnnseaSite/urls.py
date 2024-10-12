from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),

    path('actuality/<str:pk>',views.actuality,name='actuality'),

    path('history/',views.history,name='history'),
    path('organizationalChart/',views.organizational,name='organizationalChart'),

    path('OffersAndFormation/',views.OfferFormation,name='OffersAndFormation'),
    path('studiesAndScholling/',views.StudiSchol,name='studiesAndScholling'),


    path('preparatory/',views.prepatory,name='preparatory'),


    path('commonTeaching/',views.commonTeaching,name='commonTeaching'),
    path('AppliedStatistics/',views.AppliedStat,name='AppliedStatistics'),
    path('finance/',views.fianace,name='Finance_actuariat'),
    path('prospectiveEconomic/',views.economieQuntitativ,name='prospectiveEconomic'),
    path('DataScience/',views.dataScience,name='DataScience'),
    path('serviceStage/',views.ServiceStage,name='serviceStage'),
    path('formationDoctoral/',views.formationDoctorat,name='formationDoctoral'),
    path('Entrepreneurship/',views.Entrepreneurship,name='Entrepreneurship'),
    path('Entrepreneurship1/<str:pk>',views.Entrepreneurship1,name='Entrepreneurship1'),

    path('ExternalRelations/',views.ExternalRelations,name='ExternalRelations'),




    path('infrastructure/',views.Infra,name='infrastructure'),
    path('ResearchLaboratories/',views.scientRsch,name='ResearchLaboratories'),
    path('ScientificBodies/',views.ScientificBodies,name='ScientificBodies'),
    path('ScientificActivities/',views.scintficActvt,name='ScientificActivities'),
    path('actuality/',views.actual,name='actuality'),
    path('library/',views.library,name='library'),
    path('stafflibrary/',views.staffLibrary,name='stafflibrary'),
    path('internalRegulation/',views.InternalReg,name='internalRegulation'),



     path('test/',views.test,name='test'),







]
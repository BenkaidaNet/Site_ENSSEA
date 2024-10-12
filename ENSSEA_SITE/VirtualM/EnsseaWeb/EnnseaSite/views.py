from django.shortcuts import render, get_object_or_404
from .models import *
from hitcount.views import HitCountDetailView
from django.core.paginator import Paginator,PageNotAnInteger,EmptyPage

def home(request):
    photoSplide=SplideHome.objects.all()
    varEvent = Event.objects.all().order_by('-id')
    paginator = Paginator(varEvent,4)
    page = request.GET.get('page')
    # page_object = paginator.get_page(page_num)

    try:
        varEvent = paginator.page(page)
    except PageNotAnInteger:
        varEvent = paginator.page(1)
    except EmptyPage:
        varEvent = paginator.page(paginator.num_page)

    context = {'event':varEvent, 'page':page, 'photosplide':photoSplide}
    return render(request,'home.html',context)

def actuality(request,pk):
    varEvent=Event.objects.get(id=pk)
    varAllEvent=Event.objects.order_by('-id')
    context = {'eventActuality':varEvent,'AllEvent':varAllEvent}
    return render(request,'actuality.html',context)
    
def OfferFormation(request):
    return render(request,'OffersAndFormation.html')

def StudiSchol(request):
    return render(request,'studiesAndScholling.html')


def history(request):
    return render(request,'history.html')
    

def prepatory(request):
    try:
        dprtmnt= Departements.objects.get(dprtmnt='preparatoire')
    except Departements.DoesNotExist:
        dprtmnt=None
        
    try:
        ModulePrepa1=Modules.objects.get(speciality='preparatory',annee='Annee_1')
        
    except Modules.DoesNotExist:
        ModulePrepa1=None

    try:
        ModulePrepa2=Modules.objects.get(speciality='preparatory',annee='Annee_2')
    except Modules.DoesNotExist:
        ModulePrepa2=None

    context = {'Departement':dprtmnt ,'modulePrepa1':ModulePrepa1,'modulePrepa2':ModulePrepa2}
    return render(request, 'prepatory.html',context)

       

def commonTeaching(request):
    try:
        dprtmnt= Departements.objects.get(dprtmnt='commun')

    except Departements.DoesNotExist:
         dprtmnt=None

    try:
        ModuleMsterCommun=Modules.objects.get(speciality='Common_trunk')

    except Departements.DoesNotExist:
         ModuleMsterCommun=None

    context = {'Departement':dprtmnt ,'moduleMasterCommun':ModuleMsterCommun}
    return render(request, 'commonTeaching.html',context)

def AppliedStat(request):
    try:
        dprtmnt= Departements.objects.get(dprtmnt='statistique')
    except Departements.DoesNotExist:
        dprtmnt=None
    try:
        ModulStat= Modules.objects.get(speciality='Applied_Statistics')
    except Modules.DoesNotExist:
        ModulStat=None
    try:
        ModulDataSce= Modules.objects.get(speciality='Data_Science')
    except Modules.DoesNotExist:
        ModulDataSce=None

    try:
        ModulePStatstcSocl= Modules.objects.get(speciality='Population_SocialStatistics')
    except IndexError:
        ModulePStatstcSocl=None


    context = {'Departement':dprtmnt, 'moduleStat':ModulStat,'ModulDataSce':ModulDataSce,'ModulePoplStatSocl':ModulePStatstcSocl}
    return render(request, 'AppliedStatistics.html',context)

def fianace(request):
    try:
        dprtmnt=Departements.objects.get(dprtmnt='finance')
        
    except Departements.DoesNotExist:
      
        dprtmnt=None
    try:
        
        ModuleFinance=Modules.objects.get(speciality='Finance') 
    except Modules.DoesNotExist:
        ModuleFinance=None
    context = {'Departement':dprtmnt,'ModuleFinace':ModuleFinance}
    

    return render(request, 'finance.html',context)

def economieQuntitativ(request):
    try:
        dprtmnt=Departements.objects.get(dprtmnt='economieQunttv') 
    except Departements.DoesNotExist:
        dprtmnt=None
    try:
        ModuleEconmiQunttv=Modules.objects.get(speciality='Economic_Prospective') 

    except Modules.DoesNotExist:
        ModuleEconmiQunttv=None
    try:
        ModuleEconmiQunttv1=Modules.objects.get(speciality='Applied_EconomicsProspective') 

    except Modules.DoesNotExist:
        ModuleEconmiQunttv1=None


    context = {'Departement':dprtmnt,'statsticEconmPros':ModuleEconmiQunttv,'appliedEconomicPros':ModuleEconmiQunttv1}
    return render(request, 'prospectiveEconomic.html',context)

def dataScience (request):
    return render(request,'dataScience.html')

def Infra(request):
    return render(request,'Infrastructure.html')

def organizational(request):
    return render(request,'organizationalChart.html')

def ServiceStage(request):
    try:
        s=serviceStage.objects.all()
    except serviceStage.DoesNotExist:
        s=None

    try:
        f=FileServiceStage.objects.all()
    except FileServiceStage.DoesNotExist:
        f=None


    context={'stageService':s, 'file':f}

    return render(request,'serviceStage.html',context)

def formationDoctorat(request):
    return render(request,'formationDoctoral.html')

def Entrepreneurship(request):
    latestEntrship=EnterpreneurShip.objects.last() 
    varEnterpreneurShip = EnterpreneurShip.objects.all().order_by('-id')
    paginator = Paginator(varEnterpreneurShip,4)
    page = request.GET.get('page')

    try:
        varEnterpreneurShip = paginator.page(page)
    except PageNotAnInteger:
        varEnterpreneurShip = paginator.page(1)
    except EmptyPage:
        varEnterpreneurShip = paginator.page(paginator.num_page)
    context = { 'EventEntrepreneurship':varEnterpreneurShip,'lastEntrship':latestEntrship}
    return render(request,'Entrepreneurship.html' , context)

def Entrepreneurship1(request,pk):
    varEnterpreneurShip1 = EnterpreneurShip.objects.get(id=pk)
    varEnterpreneurShip = EnterpreneurShip.objects.all().order_by('-id')
    paginator = Paginator(varEnterpreneurShip,4)
    page = request.GET.get('page')
    try:
        varEnterpreneurShip = paginator.page(page)
    except PageNotAnInteger:
        varEnterpreneurShip = paginator.page(1)
    except EmptyPage:
        varEnterpreneurShip = paginator.page(paginator.num_page)
    context = { 'EventEntrepreneurship1':varEnterpreneurShip1,'EventEntrepreneurship':varEnterpreneurShip}
    return render(request,'Entrepreneurship1.html' , context) 

def ExternalRelations(request):
    try:
        events=Event.objects.all()
        filtered_events = [event for event in events if 'اتفاقية' in event.title or 'convention' in event.title]
        paginator = Paginator(filtered_events,4)
        page = request.GET.get('page')
        try:
            filtered_events = paginator.page(page)
        except PageNotAnInteger:
            filtered_events = paginator.page(1)
        except EmptyPage:
            filtered_events = paginator.page(paginator.num_page)
        

    except Event.DoesNotExist:
        events=None
    try:
        reltExtr=RelationsExtr.objects.first
    except RelationsExtr.DoesNotExist:
        reltExtr=None

    try:
        cnvt=convention.objects.all()
    except convention.DoesNotExist:
        cnvt=None


    context={'relExt':reltExtr, 'convention':cnvt,'events':filtered_events}
    return render(request,'ExternalRelations.html',context)

def scientRsch(request):
    labRech=LaboRech.objects.all()
    membrlab=LaboRech.membrLabo
    context={'laborch':labRech,'membrlab':membrlab}
    return render(request,'ResearchLaboratories.html',context)

def ScientificBodies(request):
    return render(request,'ScientificBodies.html')

def scintficActvt(request):
        return render(request,'scintficActvt.html')


def test(request):
    return render(request,'test.html')

def actual(request):
    return render(request,'actuality.html')

def library(request):
    varPhotoLibrary=PhotoBiblio.objects.all()
    context = {
        
        'photoBiblio':varPhotoLibrary if varPhotoLibrary else []
    }
    return render(request,'library.html',context)

def staffLibrary(request):
    varLibrary = Biblio.objects.first()
    context = {
        'directeur': varLibrary.directeur if varLibrary else [],
        'email':varLibrary.emailDirectr if varLibrary else [],
        'phone':varLibrary.phonDirectr if varLibrary else [],
    }
    return render(request,'staffLibrary.html',context)
def InternalReg(request):

    return render(request,'internalRegulation.html')

def navtst(request):
    return render(request,'navtst.html')



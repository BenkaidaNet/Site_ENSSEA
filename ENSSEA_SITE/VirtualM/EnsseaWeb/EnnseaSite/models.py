from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.

class Event(models.Model):
    title=models.TextField(max_length=70,null=False)
    image=models.ImageField(upload_to='media/event/', null=False)
    comment=models.TextField(null=False)
    date=models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class Departements(models.Model):
    departementChois=[
        ('preparatoire','preparatoire'),
        ('commun','commun'),
        ('statistique','statistique'),
        ('finance','finance'),
        ('economieQunttv','economieQunttv'),

    ]
    dprtmnt=models.CharField(max_length=30, choices=departementChois)
    Headdepartement=models.CharField(max_length=70,null=False)
    email=models.EmailField(max_length=70, null=False)
    phone=models.CharField(max_length=15,null=True)
    photo=models.ImageField(upload_to='media/photoDepartement/',null=True) 
    discription=models.TextField(null=True)
    def __str__(self):
        return self.dprtmnt


class Modules(models.Model):
    specialityChois=[
        ('preparatory','preparatory'),
        ('Common_trunk','Common_trunk'),
        ('Applied_Statistics','Applied_Statistics'),
        ('Applied_EconomicsProspective','Applied_EconomicsProspective'),
        ('Finance','Finance'),
        ('Data_Science','Data_Science'),
        ('Economic_Prospective','Economic_Prospective'),
        ('Population_SocialStatistics','Population_SocialStatistics')
    ]
    yearChois=[
        ('Annee_1','Annee_1'),
        ('Annee_2','Annee_2')
    ]
    speciality=models.CharField(max_length=40, choices=specialityChois,null=True)
    annee=models.CharField(max_length=30,choices=yearChois, null=True ,blank=True)
    modules=models.TextField(null=False)
    def __str__(self) :
        if (self.annee==None):
            return self.speciality
        else:
            return self.speciality+ self.annee
            


    
class EnterpreneurShip(models.Model):
    title=models.TextField(max_length=100, null=False)
    image = models.ImageField(upload_to='media/EnterpreneurShipPhotos/' ,null= True)
    image1 = models.ImageField(upload_to='media/EnterpreneurShipPhotos/',null= True)
    image2 = models.ImageField(upload_to='media/EnterpreneurShipPhotos/',null= True)
    description = models.TextField(null=True)
    date=models.DateField()

    def __str__(self):
        return self.title
    

class Biblio(models.Model):
    directeur=models.CharField(max_length=60,null=True)
    emailDirectr=models.EmailField(null=True)
    phonDirectr=models.CharField(max_length=100,null=True)
    reglement = models.FileField(upload_to='media/pdf_files', null=True, blank=True)
    def __str__(self):
        return ('Biblio ENSSEA :'+(self.directeur))
class PhotoBiblio(models.Model):
    photo=models.ImageField(upload_to='media/photoLibrary',null=True)
    caption=models.CharField(null=True)
    def __str__(self):
        return self.caption
    

class SplideHome(models.Model):
    photo=models.ImageField(upload_to='media/splideHome',null=False)
    caption=models.CharField(null=True)

    def __str__(self):
        return (self.caption)
    
# class Directeuradjoint(models.Model):
#     name=models.CharField(max_length=100,null=True)
#     photo=models.ImageField(upload_to='media/dirctrAdjoint' ,null=True)
#     phone=models.CharField(max_length=50,null=True)
#     email=models.EmailField(null=True)
class MembrLaboRech(models.Model):
    name=models.CharField( max_length=100,null=True)
    grade=models.CharField(max_length=70,null=True)
    def __str__(self):
        return (self.name)
class LaboRech(models.Model):
    laboName=models.CharField( max_length=120,null=False)
    laboDescrp=models.TextField(null=True)
    membrLabo=models.ManyToManyField(MembrLaboRech)
    def __str__(self):
        return (self.laboName)
class convention(models.Model):
    conventionChois=[
        ('national convention','national convention'),
        ('international conventions','international conventions')
    ]
    typeConv=models.CharField(choices=conventionChois,null=True)
    title=models.CharField(max_length=120,null=True)
    discription=models.TextField(null=True,blank=True)
    def __str__(self):
        return (self.typeConv+self.title)
    
class RelationsExtr(models.Model):
    presentation=models.TextField(null=True)
    headDepartment=models.CharField(max_length=60,null=False)
    Phone=models.CharField(max_length=50,null=True)
    email=models.EmailField(null=True)
    def __str__(self):
        return ('RelationsExterieur')

class FileServiceStage(models.Model):
    title=models.CharField(null=True)
    file=models.FileField(verbose_name='file to download',upload_to='PDFs', null=True,blank=True)
    def __str__(self):
        return (self.title)


class serviceStage(models.Model):
    presentation=models.TextField()
    titel=models.CharField(null=True)
    ProgrmSoutenance=models.FileField(verbose_name='Planning de Soutenances',upload_to='PDFs', null=True,blank=True)
    DateSoutenance=models.DateField(verbose_name='Date de Planning de soutenenace', null=True,blank=True)

    def __str__(self):
        return 'Service Stages'


                  

    





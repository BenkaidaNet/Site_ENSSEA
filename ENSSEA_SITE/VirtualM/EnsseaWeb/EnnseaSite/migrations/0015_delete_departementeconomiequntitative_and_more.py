# Generated by Django 4.2.3 on 2024-07-09 23:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0014_departements_headdepartement_ar_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='DepartementEconomieQuntitative',
        ),
        migrations.DeleteModel(
            name='DepartementEnseignementCommun',
        ),
        migrations.DeleteModel(
            name='DepartementFinance',
        ),
        migrations.DeleteModel(
            name='DepartementPrepa',
        ),
        migrations.DeleteModel(
            name='DepartementStat',
        ),
    ]
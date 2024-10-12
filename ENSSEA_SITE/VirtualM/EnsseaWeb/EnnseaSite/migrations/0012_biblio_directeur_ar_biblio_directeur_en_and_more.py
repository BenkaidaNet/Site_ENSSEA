# Generated by Django 4.2.3 on 2024-06-30 20:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0011_biblio_reglement'),
    ]

    operations = [
        migrations.AddField(
            model_name='biblio',
            name='directeur_ar',
            field=models.CharField(max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='biblio',
            name='directeur_en',
            field=models.CharField(max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='biblio',
            name='directeur_fr',
            field=models.CharField(max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='biblio',
            name='reglement_ar',
            field=models.FileField(blank=True, null=True, upload_to='media/pdf_files'),
        ),
        migrations.AddField(
            model_name='biblio',
            name='reglement_en',
            field=models.FileField(blank=True, null=True, upload_to='media/pdf_files'),
        ),
        migrations.AddField(
            model_name='biblio',
            name='reglement_fr',
            field=models.FileField(blank=True, null=True, upload_to='media/pdf_files'),
        ),
    ]

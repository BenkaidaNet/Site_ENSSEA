# Generated by Django 4.2.3 on 2024-07-24 22:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0028_fileservicestage_servicestage'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileservicestage',
            name='title_ar',
            field=models.CharField(null=True),
        ),
        migrations.AddField(
            model_name='fileservicestage',
            name='title_en',
            field=models.CharField(null=True),
        ),
        migrations.AddField(
            model_name='fileservicestage',
            name='title_fr',
            field=models.CharField(null=True),
        ),
        migrations.AddField(
            model_name='servicestage',
            name='presentation_ar',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='servicestage',
            name='presentation_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='servicestage',
            name='presentation_fr',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='servicestage',
            name='titel_ar',
            field=models.CharField(null=True),
        ),
        migrations.AddField(
            model_name='servicestage',
            name='titel_en',
            field=models.CharField(null=True),
        ),
        migrations.AddField(
            model_name='servicestage',
            name='titel_fr',
            field=models.CharField(null=True),
        ),
    ]

# Generated by Django 4.2.3 on 2024-06-22 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0006_modulemasterdepfinance_modulemasterdepstat_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='moduleprepamastercommun',
            name='annee',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='moduleprepamastercommun',
            name='annee_ar',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='moduleprepamastercommun',
            name='annee_en',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='moduleprepamastercommun',
            name='annee_fr',
            field=models.CharField(max_length=50, null=True),
        ),
    ]

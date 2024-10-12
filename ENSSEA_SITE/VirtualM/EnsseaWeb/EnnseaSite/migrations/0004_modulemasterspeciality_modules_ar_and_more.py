# Generated by Django 4.2.3 on 2024-06-21 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0003_modulemasterspeciality_moduleprepamastercommun'),
    ]

    operations = [
        migrations.AddField(
            model_name='modulemasterspeciality',
            name='modules_ar',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='modulemasterspeciality',
            name='modules_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='modulemasterspeciality',
            name='modules_fr',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='modulemasterspeciality',
            name='speciality_ar',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='modulemasterspeciality',
            name='speciality_en',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='modulemasterspeciality',
            name='speciality_fr',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='moduleprepamastercommun',
            name='anne_ar',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='moduleprepamastercommun',
            name='anne_en',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='moduleprepamastercommun',
            name='anne_fr',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='moduleprepamastercommun',
            name='modules_ar',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='moduleprepamastercommun',
            name='modules_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='moduleprepamastercommun',
            name='modules_fr',
            field=models.TextField(null=True),
        ),
    ]

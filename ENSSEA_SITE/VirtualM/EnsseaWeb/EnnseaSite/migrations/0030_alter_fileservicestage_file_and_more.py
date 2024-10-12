# Generated by Django 4.2.3 on 2024-07-24 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0029_fileservicestage_title_ar_fileservicestage_title_en_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fileservicestage',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to='PDFs', verbose_name='file to download'),
        ),
        migrations.AlterField(
            model_name='servicestage',
            name='DateSoutenance',
            field=models.DateField(blank=True, null=True, verbose_name='Date de Planning de soutenenace'),
        ),
    ]
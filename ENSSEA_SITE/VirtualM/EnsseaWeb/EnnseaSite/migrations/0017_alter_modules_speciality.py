# Generated by Django 4.2.3 on 2024-07-10 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0016_modules_alter_departements_dprtmnt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='modules',
            name='speciality',
            field=models.CharField(choices=[('preparatory', 'preparatory'), ('Common_trunk', 'Common_trunk'), ('Applied_Statistics', 'Applied_Statistics'), ('Applied_EconomicsProspective', 'Applied_EconomicsProspective'), ('Finance', 'Finance'), ('Data_Science', 'Data_Science'), ('Economic_Prospective', 'Economic_Prospective'), ('Population_SocialStatistics', 'Population_SocialStatistics')], max_length=40),
        ),
    ]

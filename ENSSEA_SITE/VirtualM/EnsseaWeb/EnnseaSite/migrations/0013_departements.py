# Generated by Django 4.2.3 on 2024-07-09 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0012_biblio_directeur_ar_biblio_directeur_en_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Departements',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dprtmnt', models.CharField(choices=[('preparatoire', 'preparatoire'), ('commun', 'commun'), ('statistique', 'statistique'), ('finance', 'finance'), ('economieQunttv', 'economieQunttv')], max_length=20)),
                ('Headdepartement', models.CharField(max_length=70)),
                ('email', models.EmailField(max_length=70)),
                ('phone', models.CharField(max_length=15, null=True)),
                ('photo', models.ImageField(null=True, upload_to='media/photoDepartement/')),
                ('discription', models.TextField(null=True)),
            ],
        ),
    ]
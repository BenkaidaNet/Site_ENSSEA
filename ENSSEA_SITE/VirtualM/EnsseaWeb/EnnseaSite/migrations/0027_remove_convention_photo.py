# Generated by Django 4.2.3 on 2024-07-23 13:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('EnnseaSite', '0026_alter_convention_discription_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='convention',
            name='photo',
        ),
    ]

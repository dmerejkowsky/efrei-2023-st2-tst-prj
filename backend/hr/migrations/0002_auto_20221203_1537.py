# Generated by Django 3.2.12 on 2022-12-03 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hr', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='address',
            old_name='line1',
            new_name='address_line1',
        ),
        migrations.RemoveField(
            model_name='address',
            name='line2',
        ),
        migrations.AddField(
            model_name='address',
            name='address_line2',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]

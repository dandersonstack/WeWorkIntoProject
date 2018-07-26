# Generated by Django 2.0.7 on 2018-07-25 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('we_eat_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='resteraunts',
            name='company_site_url',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='resteraunts',
            name='genre_string',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='resteraunts',
            name='hours',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='resteraunts',
            name='lat',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='resteraunts',
            name='lng',
            field=models.FloatField(null=True),
        ),
        migrations.AddField(
            model_name='resteraunts',
            name='primary_image_url',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='resteraunts',
            name='rating',
            field=models.FloatField(),
        ),
    ]
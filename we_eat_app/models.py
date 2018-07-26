from django.db import models

# Create your models here.

class Resteraunts(models.Model):
    name = models.CharField(max_length=255, null=False)
    rating = models.FloatField(null=False)
    lat = models.FloatField(null=True)
    lng = models.FloatField(null=True)
    genre_string = models.CharField(max_length=255, null=True)
    hours = models.CharField(max_length=255, null=True)
    primary_image_url = models.CharField(max_length=255, null=True)
    company_site_url = models.CharField(max_length=255, null=True)

    def __str__(self):
        return "{} - {}".format(self.name, self.rating)
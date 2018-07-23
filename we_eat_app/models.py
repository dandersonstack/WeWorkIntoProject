from django.db import models

# Create your models here.

class Resteraunts(models.Model):
    # song title
    name = models.CharField(max_length=255, null=False)
    # name of artist or group/band
    rating = models.CharField(max_length=255, null=False) #make this a python enum

    def __str__(self):
        return "{} - {}".format(self.name, self.rating)


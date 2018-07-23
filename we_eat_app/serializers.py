from rest_framework import serializers
from .models import Resteraunts


class ResterauntSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resteraunts
        fields = ("name", "rating")
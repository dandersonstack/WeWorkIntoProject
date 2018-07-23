from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .models import Resteraunts
from .serializers import ResterauntSerializer


class ListSongsView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Resteraunts.objects.all()
    serializer_class = ResterauntsSerializer

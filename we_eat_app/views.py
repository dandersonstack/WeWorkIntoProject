from django.shortcuts import render

# Create your views here.


from rest_framework import generics, viewsets
from .models import Resteraunts
from .serializers import ResterauntSerializer



class ResterauntsView(viewsets.ModelViewSet):
    """
    Provides a get method handler.
    """
    queryset = Resteraunts.objects.all()
    serializer_class = ResterauntSerializer
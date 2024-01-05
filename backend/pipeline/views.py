from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .serializers import serializerFase
from .models import Card_Produtos, Fase

class FaseView(viewsets.ModelViewSet):
    queryset = Fase.objects.all()
    serializer_class = serializerFase
    permission_classes = [permissions.AllowAny]

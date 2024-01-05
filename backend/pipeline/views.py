from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .serializers import serializerPipe
from .models import Card_Produtos, Fase, Pipe

class PipeView(viewsets.ModelViewSet):
    queryset = Pipe.objects.all()
    serializer_class = serializerPipe
    permission_classes = [permissions.AllowAny]

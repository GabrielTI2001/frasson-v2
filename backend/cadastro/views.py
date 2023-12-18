from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .serializers import serializerPessoa
from .models import Cadastro_Pessoal

# Create your views here.
class PessoalView(viewsets.ModelViewSet):
    queryset = Cadastro_Pessoal.objects.all()
    serializer_class = serializerPessoa
    permission_classes = [permissions.AllowAny]
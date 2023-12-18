from django.shortcuts import render
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from .serializers import serializerProfile
from .models import Profile

# Create your views here.
class ProfileView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = serializerProfile
    permission_classes = [permissions.AllowAny]
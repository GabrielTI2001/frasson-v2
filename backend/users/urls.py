from django.contrib import admin
from django.urls import path, include
from cadastro import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'profile', views.PessoalView)


urlpatterns = [
    
]
urlpatterns += router.urls
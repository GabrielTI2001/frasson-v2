from django.contrib import admin
from django.urls import path, include
from pipeline import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'pipes/produtos', views.PipeView)
router.register(r'fases/', views.FasesView)

urlpatterns = []
urlpatterns += router.urls
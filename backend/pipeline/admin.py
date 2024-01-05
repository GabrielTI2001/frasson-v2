from django.contrib import admin
from pipeline.models import Pipe_Produtos

# Register your models here.
@admin.register(Pipe_Produtos)
class Pipe_Produtos(admin.ModelAdmin):
    list_display = ('id',)
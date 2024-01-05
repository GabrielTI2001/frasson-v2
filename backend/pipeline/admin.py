from django.contrib import admin
from pipeline.models import Pipe_Produtos

# Register your models here.
@admin.register(Pipe_Produtos)
class CadastroPipesAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'name', 'description')
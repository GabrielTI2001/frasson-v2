from django.contrib import admin
from pipeline.models import Card_Produtos, Cadastro_Pessoal, Contratos_Servicos, Instituicoes_Parceiras 
from pipeline.models import Detalhamento_Servicos, Instituicoes_Razao_Social, Grupos_Clientes

# Register your models here.
@admin.register(Card_Produtos)
class PipeProdutosAdmin(admin.ModelAdmin):
    list_display = ('id',)

@admin.register(Cadastro_Pessoal)
class CadastroPessoalAdmin(admin.ModelAdmin):
    list_display = ('id',)

@admin.register(Contratos_Servicos)
class ContratosServicosAdmin(admin.ModelAdmin):
    list_display = ('id',)

@admin.register(Instituicoes_Parceiras)
class InstituicoesParceiraslAdmin(admin.ModelAdmin):
    list_display = ('id',)

@admin.register(Instituicoes_Razao_Social)
class InstituicoesRazaoSocialAdmin(admin.ModelAdmin):
    list_display = ('id',)

@admin.register(Detalhamento_Servicos)
class DetalhamentoServicosAdmin(admin.ModelAdmin):
    list_display = ('id',)

@admin.register(Grupos_Clientes)
class GruposClientesAdmin(admin.ModelAdmin):
    list_display = ('id',)
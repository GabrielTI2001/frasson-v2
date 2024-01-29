from rest_framework import serializers
from .models import Card_Produtos, Fase, Pipe, Detalhamento_Servicos, Contratos_Servicos, Cadastro_Pessoal
from .models import Instituicoes_Parceiras

class serializerCadastro_Pessoal(serializers.ModelSerializer):
    class Meta:
        model = Cadastro_Pessoal
        fields = ['id', 'razao_social', 'cpf_cnpj']

class serializerInstituicoes_Parceiras(serializers.ModelSerializer):
    razao_social = serializers.CharField(source='instituicao.razao_social', required=False)
    class Meta:
        model = Instituicoes_Parceiras
        fields = ['id', 'razao_social', 'identificacao']

class serializerDetalhamento_Servicos(serializers.ModelSerializer):
    class Meta:
        model = Detalhamento_Servicos
        fields = ['id', 'produto', 'detalhamento_servico']

class serializerContratos_Servicos(serializers.ModelSerializer):
    contratante = serializers.CharField(source='contratante.razao_social', required=False)
    class Meta:
        model = Contratos_Servicos
        fields = ['id', 'contratante', 'produto']

class serializerCard_Produtos(serializers.ModelSerializer):
    detalhamento = serializerDetalhamento_Servicos(many=False, required=False)
    beneficiario = serializerCadastro_Pessoal(many=True, required=False, read_only=False)
    instituicao = serializerInstituicoes_Parceiras(many=False, required=False)
    contrato = serializerContratos_Servicos(many=False, required=False)
    class Meta:
        model = Card_Produtos
        fields = '__all__'

class serializerFase(serializers.ModelSerializer):
    card_produtos_set = serializerCard_Produtos(many=True, read_only=True, required=False)
    class Meta:
        model = Fase
        fields = '__all__'

class serializerPipe(serializers.ModelSerializer):
    fase_set = serializerFase(many=True, read_only=True, required=False)
    class Meta:
        model = Pipe
        fields = '__all__'
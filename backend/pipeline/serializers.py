from rest_framework import serializers
from .models import Card_Produtos, Fase, Pipe, Detalhamento_Servicos, Contratos_Servicos, Cadastro_Pessoal
from .models import Instituicoes_Parceiras

class serializerCadastro_Pessoal(serializers.ModelSerializer):
    class Meta:
        model = Cadastro_Pessoal
        fields = ['id', 'razao_social', 'cpf_cnpj']

class serializerInstituicoes_Parceiras(serializers.ModelSerializer):
    razao_social = serializers.CharField(source='instituicao.razao_social', required=False, read_only=True)
    class Meta:
        model = Instituicoes_Parceiras
        fields = ['id', 'razao_social', 'identificacao']

class serializerDetalhamento_Servicos(serializers.ModelSerializer):
    class Meta:
        model = Detalhamento_Servicos
        fields = ['id', 'produto', 'detalhamento_servico']

class serializerContratos_Servicos(serializers.ModelSerializer):
    contratante = serializers.CharField(source='contratante.razao_social', required=False, read_only=True)
    class Meta:
        model = Contratos_Servicos
        fields = ['id', 'contratante', 'produto']

class serializerCard_Produtos(serializers.ModelSerializer):
    beneficiario = serializerCadastro_Pessoal(many=True, required=False, read_only=False)
    info_contrato = serializers.SerializerMethodField()
    info_instituicao = serializers.SerializerMethodField()
    info_detalhamento = serializers.SerializerMethodField()
    class Meta:
        model = Card_Produtos
        fields = '__all__'
    def get_info_instituicao(self, obj):
        if obj.instituicao:
            return {
                'id': obj.instituicao.id,
                'razao_social': obj.instituicao.instituicao.razao_social,
                'identificacao': obj.instituicao.identificacao,
            }
        else:
            return None
    def get_info_detalhamento(self, obj):
        if obj.detalhamento:
            return {
                'id': obj.detalhamento.id,
                'detalhamento_servico': obj.detalhamento.detalhamento_servico,
                'produto': obj.detalhamento.produto,
            }
        else:
            return None
    def get_info_contrato(self, obj):
        if obj.contrato:
            return {
                'id': obj.contrato.id,
                'contratante': obj.contrato.contratante.razao_social,
                'produto': obj.contrato.produto,
            }
        else:
            return None

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
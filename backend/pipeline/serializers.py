from rest_framework import serializers
from .models import Card_Produtos, Fase, Pipe

class serializerCard_Produtos(serializers.ModelSerializer):
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
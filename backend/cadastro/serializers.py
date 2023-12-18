from rest_framework import serializers
from .models import Cadastro_Pessoal

class serializerPessoa(serializers.ModelSerializer):
    class Meta:
        model = Cadastro_Pessoal
        fields = '__all__'
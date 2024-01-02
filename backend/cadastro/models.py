from django.db import models

# Create your models here.
class Grupos_Clientes(models.Model):
    id = models.BigIntegerField(primary_key=True)
    nome_grupo = models.CharField(max_length=255, null=False, blank=False, verbose_name='Nome Grupo')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        verbose_name_plural = 'Grupos Clientes'
    def __str__(self):
        return self.nome_grupo

class Cadastro_Pessoal(models.Model): 
    id = models.BigIntegerField(primary_key=True)
    razao_social = models.CharField(max_length=255, null=True, verbose_name='Nome ou Razão Social')
    natureza = models.CharField(max_length=10, null=True, verbose_name='Natureza Jurídica')
    cpf_cnpj = models.CharField(max_length=30, null=True, verbose_name='CPF ou CNPJ')
    numero_rg = models.CharField(max_length=50, null=True, verbose_name='Número RG')
    endereco = models.CharField(max_length=255, null=True, verbose_name='Endereço')
    municipio = models.CharField(max_length=255, null=True, verbose_name='Município')
    uf = models.CharField(max_length=30, null=True, verbose_name='UF')
    cep = models.CharField(max_length=30, null=True, verbose_name='CEP')
    data_nascimento = models.DateField(null=True, verbose_name='Data Nascimento')
    contato1 = models.CharField(max_length=100, null=True, verbose_name='Contato 01')
    contato2 = models.CharField(max_length=100, null=True, verbose_name='Contato 02')
    email = models.CharField(max_length=100, null=True, verbose_name='Email')
    grupo = models.ForeignKey(Grupos_Clientes, on_delete=models.SET_NULL, null=True, verbose_name='Id do Grupo')
    profissao = models.CharField(max_length=255, null=True, verbose_name='Profissão')
    #avatar = ResizedImageField(size=[128, 128], default='avatars/clients/default-avatar.jpg', upload_to='avatars/clients')
    record_url = models.CharField(max_length=255, null=True, verbose_name='URL do Registro')
    created_at = models.DateTimeField(null=True)
    updated_at = models.DateTimeField(null=True)
    class Meta:
        verbose_name_plural = 'Cadastro Pessoal'
    def __str__(self):
        return self.razao_social


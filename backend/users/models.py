from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    pipefy_id = models.BigIntegerField(null=True, verbose_name='Id do Usuário no Pipefy')
    #pipefy_token = models.CharField(max_length=255, null=True, verbose_name='Token de acesso pessoal Pipefy')
    job_function = models.CharField(max_length=255, null=True, verbose_name='Cargo ou Função')
    cpf =  models.CharField(max_length=255, null=True, verbose_name='CPF')
    bio = models.TextField(default=None, null=True, verbose_name='Biografia')
    birthday = models.DateField(null=True, verbose_name='Data Nascimento')
    contato_celular =  models.CharField(max_length=255, null=True, verbose_name='Contato Celular')
    avatar = models.FileField(default='avatars/users/default-avatar.jpg', upload_to='avatars/users')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name_plural = 'User Profile'
    def __str__(self):
        return self.user.first_name

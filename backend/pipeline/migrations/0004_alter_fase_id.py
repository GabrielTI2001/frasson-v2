# Generated by Django 5.0 on 2024-01-09 11:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pipeline', '0003_pipe_rename_pipe_produtos_card_produtos_fase_pipe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fase',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

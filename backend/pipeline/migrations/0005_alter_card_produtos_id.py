# Generated by Django 5.0 on 2024-01-09 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pipeline', '0004_alter_fase_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='card_produtos',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

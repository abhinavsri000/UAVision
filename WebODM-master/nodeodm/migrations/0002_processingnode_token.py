# Generated by Django 2.0.3 on 2018-06-25 16:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nodeodm', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='processingnode',
            name='token',
            field=models.CharField(default='', help_text="Token to use for authentication. If the node doesn't have authentication, you can leave this field blank.", max_length=1024, null=True),
        ),
    ]

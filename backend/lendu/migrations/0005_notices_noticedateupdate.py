# Generated by Django 4.0.5 on 2022-06-19 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lendu', '0004_rename_image_url_notices_noticeimg'),
    ]

    operations = [
        migrations.AddField(
            model_name='notices',
            name='NoticeDateUpdate',
            field=models.DateTimeField(auto_now=True),
        ),
    ]

# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-28 19:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('glowna', '0002_auto_20171028_1449'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='description',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AddField(
            model_name='event',
            name='link',
            field=models.CharField(default='', max_length=500),
        ),
        migrations.AddField(
            model_name='event',
            name='tags',
            field=models.CharField(default='', max_length=250),
        ),
    ]

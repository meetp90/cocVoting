# Generated by Django 4.1.5 on 2023-03-05 03:36

from django.db import migrations, models
import django.db.models.deletion
import voting_app.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ClosedElection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('election_name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='OpenElection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('election_name', models.CharField(max_length=255)),
                ('election_type', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='OpenCandidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('pan', models.CharField(max_length=10, validators=[voting_app.models.pan_validator])),
                ('party', models.CharField(max_length=255)),
                ('age', models.PositiveIntegerField()),
                ('election', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='voting_app.openelection')),
            ],
        ),
        migrations.CreateModel(
            name='ClosedCandidate',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('pan', models.CharField(max_length=10, validators=[voting_app.models.pan_validator])),
                ('party', models.CharField(max_length=255)),
                ('age', models.PositiveIntegerField()),
                ('election', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='voting_app.closedelection')),
            ],
        ),
    ]

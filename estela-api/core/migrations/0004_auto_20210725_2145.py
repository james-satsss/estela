# Generated by Django 3.1.1 on 2021-07-25 21:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0003_auto_20210630_1516"),
    ]

    operations = [
        migrations.AlterField(
            model_name="spiderjob",
            name="status",
            field=models.CharField(
                choices=[
                    ("WAITING", "Waiting"),
                    ("RUNNING", "Running"),
                    ("STOPPED", "Stopped"),
                    ("INCOMPLETE", "Incomplete"),
                    ("CANCELLED", "Cancelled"),
                    ("COMPLETED", "Completed"),
                    ("ERROR", "Error"),
                ],
                default="WAITING",
                max_length=16,
            ),
        ),
    ]

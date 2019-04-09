from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    age = models.DecimalField(max_digits=3, decimal_places=0)
    gender = (
        ('남', 'Male'),
        ('여', 'Female'),
    )
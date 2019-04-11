from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    age = models.DecimalField(max_digits=3, decimal_places=0)
    gender = (
        ('남', 'Male'),
        ('여', 'Female'),
    )
    grade = (
        ('1학년', '1학년'),
        ('2학년', '2학년'),
        ('3학년', '3학년'),
        ('4학년', '4학년'),
    )
    department = models.CharField(max_length=10)
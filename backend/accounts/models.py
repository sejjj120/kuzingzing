from django.db import models
from django.contrib.auth.models import AbstractUser

class MyUser(AbstractUser):
    age = models.DecimalField(max_digits=3, decimal_places=0,default=1)
    gender_choice = (
        ('남', 'Male'),
        ('여', 'Female'),
    )
    grade_choice = (
        ('1학년', '1'),
        ('2학년', '2'),
        ('3학년', '3'),
        ('4학년', '4'),
    )
    gender = models.CharField(max_length=100, choices=gender_choice, default='남')
    grade = models.CharField(max_length=100,choices=grade_choice, default='1학년')
    department = models.CharField(max_length=10,default=1)
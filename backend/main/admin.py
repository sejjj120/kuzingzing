from django.contrib import admin
from .models import Agenda, Comment, Like

admin.site.register(Agenda)
admin.site.register(Comment)
admin.site.register(Like)

from django.db import models
from accounts.models import MyUser


class Agenda(models.Model):
    area = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    timestamp = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(MyUser, related_name='agendas', on_delete=models.CASCADE)


class Like(models.Model):
    agenda = models.ForeignKey(Agenda, related_name='agenda_likes', on_delete=models.CASCADE)
    creator = models.ForeignKey(MyUser, related_name='user_likes', on_delete=models.CASCADE)
    likenum = models.IntegerField()
    dislikenum = models.IntegerField()


class Comment(models.Model):
    agenda = models.ForeignKey(Agenda, related_name='agenda_comments', on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    creator = models.ForeignKey(MyUser, related_name='user_comments', on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    like = models.IntegerField()

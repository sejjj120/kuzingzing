from rest_framework import serializers
from main.models import Agenda, Comment, Like
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'email', 'password')


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('agenda', 'creator', 'likenum', 'dislikenum',
                  )


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('agenda', 'content', 'timestamp',
                  'creator')


class AgendaSerializer(serializers.ModelSerializer):
    agenda_comments = CommentSerializer(many=True)
    agenda_likes = LikeSerializer(many=True)
    total_likes = serializers.IntegerField()
    total_dislikes = serializers.IntegerField()

    class Meta:
        model = Agenda
        fields = ('area', 'description', 'timestamp',
                  'creator', 'agenda_comments', 'agenda_likes', 'total_likes', 'total_dislikes')

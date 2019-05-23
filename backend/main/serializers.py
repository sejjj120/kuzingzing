from rest_framework import serializers
from main.models import Agenda, Comment, Like
from django.contrib.auth.models import User


# class UserSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = MyUser
#         fields = ('username', 'email', 'password','age','gender','grade','department')


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('pk', 'agenda', 'creator', 'likenum', 'dislikenum',
                  )


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('pk','agenda', 'content', 'timestamp',
                  'creator','username')


class AgendaSerializer(serializers.ModelSerializer):
    agenda_comments = CommentSerializer(many=True, required=False, read_only=True)
    agenda_likes = LikeSerializer(many=True,required=False, read_only=True)
    total_likes = serializers.IntegerField(required=False, read_only=True)
    total_dislikes = serializers.IntegerField(required=False, read_only=True)

    class Meta:
        model = Agenda
        fields = ('pk', 'area', 'description', 'timestamp',
                  'creator', 'agenda_comments', 'agenda_likes', 'total_likes', 'total_dislikes','username')


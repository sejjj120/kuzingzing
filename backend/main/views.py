from main.models import Agenda, Comment, Like
from django.contrib.auth.models import User
from rest_framework import viewsets
from django.db.models import Sum, Count
from main.serializers import AgendaSerializer, CommentSerializer, LikeSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AgendaViewSet(viewsets.ModelViewSet):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer

    def get_queryset(self):
        return Agenda.objects.annotate(
            total_likes=Sum('agenda_likes__likenum'),
            total_dislikes=Sum('agenda_likes__dislikenum')
        )


class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

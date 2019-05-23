from main.models import Agenda, Comment, Like
from rest_framework import permissions
from main.permission import IsOwnerOrReadOnly
from rest_framework import viewsets
from django.db.models import Sum, Count
from main.serializers import AgendaSerializer, CommentSerializer, LikeSerializer
from django.http import HttpResponse, JsonResponse

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = MyUser.objects.all()
#     serializer_class = UserSerializer


class AgendaViewSet(viewsets.ModelViewSet):
    queryset = Agenda.objects.all()
    serializer_class = AgendaSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)
    def get_queryset(self):
        return Agenda.objects.annotate(
            total_likes=Sum('agenda_likes__likenum'),
            total_dislikes=Sum('agenda_likes__dislikenum')
        )
    def perform_create(self, serializer):
            serializer.save(creator=self.request.user)
            serializer.save(username=self.request.user.username)
# class AgendaList(generics.ListCreateAPIView):
#     queryset = Agenda.objects.all()
#     serializer_class = AgendaSerializer
#     def get_queryset(self):
#         return Agenda.objects.annotate(
#             total_likes=Sum('agenda_likes__likenum'),
#             total_dislikes=Sum('agenda_likes__dislikenum')
#         )
#     def perform_create(self, serializer):
#         created = Like.objects.filter(creator=self.request.user)
#         created_user=[]
#         for i in created:
#             created_user.append(created[i]['creator'])
#         if self.request.user in created_user:
#             return reverse('agenda_detail', args=[self.request.user],request=self.request)
#         else:
#             serializer.save(creator=self.request.user)
#             serializer.save(username=self.request.user.username)
# class AgendaDetail(mixins.RetrieveModelMixin,
#                     mixins.UpdateModelMixin,
#                     mixins.DestroyModelMixin,
#                     generics.GenericAPIView):
#     queryset = Agenda.objects.all()
#     serializer_class = AgendaSerializer
#
#     def get(self, request, *args, **kwargs):
#         return self.retrieve(request, *args, **kwargs)
#
#     def put(self, request, *args, **kwargs):
#         return self.update(request, *args, **kwargs)
#
#     def delete(self, request, *args, **kwargs):
#         return self.destroy(request, *args, **kwargs)
class LikeViewSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer
    def perform_create(self, serializer):
            use=self.request.user
            a = Like.objects.filter(creator=use)
            created_agenda=[]
            for i in a:
                created_agenda.append(a[i]['agenda'])
            if int(len(created_agenda))>10:
                return JsonResponse(serializer.errors, status=400)
            else:
                serializer.save(creator=self.request.user)

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    def get_queryset(self):
        return Comment.objects.annotate(
            total_likes=Sum('comment_likes__likenum'),
            total_dislikes=Sum('comment_likes__dislikenum')
        )
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
        serializer.save(username=self.request.user.username)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,
                          IsOwnerOrReadOnly,)

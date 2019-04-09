from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'Agendas', views.AgendaViewSet)
router.register(r'Comments', views.CommentViewSet)
router.register(r'Likes', views.LikeViewSet)
router.register(r'Users', views.UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
from django.urls import path, include
from django.contrib.auth import views as auth_views
from . import views as user_views

urlpatterns = [
    path('login/', include(auth_views.LoginView)),
    path('logout/', include(auth_views.LogoutView))
]
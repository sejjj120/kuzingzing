from django.contrib import admin
from django.urls import path, include
from accounts import views as user_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('register', user_views.register),
]
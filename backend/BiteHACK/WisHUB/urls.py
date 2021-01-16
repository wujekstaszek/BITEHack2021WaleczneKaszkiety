from django.urls import path, re_path
from . import views
from django.conf.urls import url
app_name = 'chrobry'
urlpatterns = [
    re_path('', views.index),
]

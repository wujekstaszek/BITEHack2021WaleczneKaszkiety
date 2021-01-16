from django.urls import path, re_path
from . import views
from django.conf.urls import url
app_name = 'WisHUB'
urlpatterns = [
    re_path('tags', views.tags),
    re_path('fields', views.fields),
]

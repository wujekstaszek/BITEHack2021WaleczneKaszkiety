from django.urls import path, re_path
from . import views
from django.conf.urls import url
app_name = 'WisHUB'
urlpatterns = [
    path('tags', views.tags),
    path('fields', views.fields),
    path('tag/<slug:id>/', views.tag),
    path('field/<slug:id>/', views.field),
    path('posts/<slug:tag_id>/', views.field),
    path('post/<slug:id>/', views.field),
]

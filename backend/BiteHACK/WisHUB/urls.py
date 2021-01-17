from django.urls import path, re_path
from . import views
from django.conf.urls import url
from rest_framework_simplejwt import views as jwt_views


app_name = 'WisHUB'
urlpatterns = [
    path('tags', views.tags),
    path('fields', views.fields),
    path('tag/<slug:tag_id>/', views.tag),
    path('field/<slug:field_id>/', views.field),
    path('posts/<slug:tag_id>/', views.posts),
    path('post/<slug:post_id>/', views.post),
    path('post',views.add_post.as_view()),
    path('register', views.register),
    path('login_data',views.login_data.as_view()),
    path('login', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]

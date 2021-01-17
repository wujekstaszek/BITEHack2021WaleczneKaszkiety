<<<<<<< HEAD
# from django.conf.urls import url, path, include
# from rest_framework import routers
# from .views import views

from django.urls import path
from .views import views
# import views
# # # from django.urls import include, path
# # from rest_framework import routers
# from .views import views

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)

# urlpatterns = [
    # path('', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

# ]


urlpatterns = [
    path('api/lead/', views.PostCreate.as_view() ),
]
=======
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
>>>>>>> 495e584a9dbcea8e7e4dfd557422ac2e94654621

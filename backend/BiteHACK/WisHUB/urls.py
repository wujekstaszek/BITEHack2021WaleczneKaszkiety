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
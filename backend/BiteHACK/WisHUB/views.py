from django.shortcuts import render

<<<<<<< HEAD
from .models import Post
from .serializers import PostSerializer
from rest_framework import generics

class PostCreate(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#     permission_classes = [permissions.IsAuthenticated]


=======

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Tag,Field
from .serializer import TagSerializer

@api_view(['GET'])
def tags(request):
	respond = {}
	data = Tag.nodes.all()
	respond["tags"] =[x.serialize for x in data]
	return Response(respond)




@api_view(['GET'])
def fields(request):
	respond = {}
	data = Field.nodes.all()
	respond["fields"] =[x.serialize for x in data]
	return Response(respond)


@api_view(['GET'])
def posts(request,id):
	respond = {}
	data = Field.nodes.get(field_id = id)
	data = data.serialize
	return Response(data)




@api_view(['GET'])
def tag(request,id):
	respond = {}
	data = Tag.nodes.get(tag_id = id)
	respond = data.serialize
	return Response(respond)

@api_view(['GET'])
def field(request,id):
	respond = {}
	data = Field.nodes.get(field_id = id)
	data = data.serialize
	return Response(data)

@api_view(['GET'])
def post(request,id):
	respond = {}
	data = Field.nodes.get(field_id = id)
	data = data.serialize
	return Response(data)




# Create your views here.
>>>>>>> 495e584a9dbcea8e7e4dfd557422ac2e94654621

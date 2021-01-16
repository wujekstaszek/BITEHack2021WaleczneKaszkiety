from django.shortcuts import render


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

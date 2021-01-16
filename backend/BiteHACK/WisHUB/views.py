from django.shortcuts import render


from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Tag,Field
from .serializer import TagSerializer

@api_view(['GET', 'POST'])
def index(request):
	respons = {}
	data = Tag.nodes.all()
	respons["tags"] =[x.serialize for x in data]
	data = Field.node.all()
	respons["fields"] =[x.serialize for x in data]
	return Response(data)

# Create your views here.

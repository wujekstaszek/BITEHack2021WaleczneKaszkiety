from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User as djangoUser
from django.contrib.auth import authenticate
from .models import User
from .models import Tag,Field
import json

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
def posts(request,tag_id):
	respond = {}
	data = Tag.nodes.filter(tag_id = tag_id)
	data = data.posts.all()
	data = [x.serialize for x in data]
	return Response(data)




@api_view(['GET'])
def tag(request,tag_id):
	respond = {}
	data = Tag.nodes.get(tag_id = tag_id)
	respond = data.serialize
	return Response(respond)

@api_view(['GET'])
def field(request,field_id):
	respond = {}
	data = Field.nodes.get(field_id = field_id)
	data = data.serialize
	return Response(data)

@api_view(['GET'])
def post(request):
	respond = {}
	data = Post.nodes.all(post_id = post_id)
	data = data.serialize
	return Response(data)

class add_post(APIView):
	permission_classes = (IsAuthenticated,)
	@api_view(['POST'])
	def get(self,request):
		data = json.load(request.body)
		text = data["text"]
		link = data["link"]
		tags = data["tags"]
		try:
			post = Post(text=text,link=link)
			post.save()
			for tag in tags:
				if tag["name"] in Tag.nodes.all(field=tag["field"]):
					post.tags.connect(Tag.nodes.get(name=tag["name"]))
				else:
					t = Tag(name=tag["name"])
					t.save()
					t.field.connect(Field.nodes.get(name=tag["field"]))
					post.tags.connect(t)
			response = True
		except Exception as e:
			response = False
		return Response(response)




class login_data(APIView):
	permission_classes = (IsAuthenticated,)
	@api_view(['GET'])
	def get(self,request):
		user =  request.user
		context = {
		"name":user.name,
		"email":user.email
		}
		return Response(context)



@api_view(['POST'])
def register(request):
	data = json.loads(request.body)
	username = data["username"]
	password = data["password"]
	email = data["email"]
	try:
		u = djangoUser.objects.create_user(username=username,password=password,email=email)
		u.save()
		u = User(name=username,email=email)
		u.save()
		response = True
	except Exception as e:
		raise e
		response = False
	return Response(response)

# Create your views here.

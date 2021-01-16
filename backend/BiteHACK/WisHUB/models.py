from neomodel  import StringProperty,DateTimeProperty,UniqueIdProperty,IntegerProperty,RelationshipTo,RelationshipFrom
from neomodel.cardinality import *
from django_neomodel import DjangoNode
from django.forms import ModelForm

class User(DjangoNode):
    user_id = IntegerProperty(required=True)
    name = StringProperty(required=True)
    email = StringProperty(required=True)
    posts = RelationshipTo("Post", "POSTED", cardinality=ZeroOrMore)
    comments = RelationshipTo("Comment", "COMMENTED", cardinality=ZeroOrMore)

class Post(DjangoNode):
    post_id = IntegerProperty(required=True)
    link = StringProperty(required=True,)
    date = DateTimeProperty(required=True)

    #photo

class Comment(DjangoNode):
    text = StringProperty(required=True)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)

class Tag(DjangoNode):
    tag_id = IntegerProperty(required=True)
    name = StringProperty(required=True)





# Create your models here.

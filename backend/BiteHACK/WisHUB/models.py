from neomodel  import StringProperty,DateTimeProperty,UniqueIdProperty,IntegerProperty,RelationshipTo,RelationshipFrom
from neomodel.cardinality import *
from django_neomodel import DjangoNode
from django.forms import ModelForm
import datetime

class User(DjangoNode):
    user_id = IntegerProperty(required=True, unique_index=True)
    name = StringProperty(required=True)
    email = StringProperty(required=True)
    posts = RelationshipTo("Post", "POSTED", cardinality=ZeroOrMore)
    comments = RelationshipTo("Comment", "COMMENTED", cardinality=ZeroOrMore)

class Post(DjangoNode):
    post_id = IntegerProperty(required=True, unique_index=True)
    date = DateTimeProperty(default=datetime.datetime.now())
    link = StringProperty(default=os)
    text = StringProperty(required=False)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)
    tags = RelationshipTo("Tag", "TAGGED", cardinality=OneOrMore)
    user = RelationshipFrom("User", "POSTED", cardinality=One)
    comments = RelationshipFrom("Comment", "CONCERNING", cardinality=ZeroOrMore)
    #photo

class Comment(DjangoNode):
    comment_id = IntegerProperty(required=True, unique_index=True)
    date = DateTimeProperty(default=datetime.datetime.now())
    text = StringProperty(required=True)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)
    user = RelationshipFrom("User", "COMMENTED", cardinality=One)
    post = RelationshipTo("Post", "CONCERNING", cardinality=One)

class Tag(DjangoNode):
    tag_id = IntegerProperty(required=True, unique_index=True)
    name = StringProperty(required=True)
    posts = RelationshipFrom("Post", "TAGGED", cardinality=ZeroOrMore)

# Create your models here.

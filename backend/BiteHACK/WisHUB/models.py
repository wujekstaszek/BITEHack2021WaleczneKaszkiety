from neomodel  import StringProperty,DateTimeProperty,UniqueIdProperty,IntegerProperty,RelationshipTo,RelationshipFrom
from neomodel.cardinality import *
from django_neomodel import DjangoNode
from django.forms import ModelForm
import datetime

class User(DjangoNode):
    user_id = UniqueIdProperty()
    name = StringProperty(required=True)
    email = StringProperty(required=True)
    posts = RelationshipTo("Post", "POSTED", cardinality=ZeroOrMore)
    comments = RelationshipTo("Comment", "COMMENTED", cardinality=ZeroOrMore)

    @property
    def serialize(self):
    return {
        'node_properties': {
            'user_id': self.user_id,
            'name': self.name,
            'email': self.email,
            'posts': [x.post_id for x in self.posts.all()],
            'comments': [x.comment_id for x in self.comments.all()],
        },
    }


class Post(DjangoNode):
    post_id = UniqueIdProperty()
    date = DateTimeProperty(default=datetime.datetime.now())
    link = StringProperty(required=True)
    text = StringProperty(required=False)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)
    tags = RelationshipTo("Tag", "TAGGED", cardinality=OneOrMore)
    user = RelationshipFrom("User", "POSTED", cardinality=One)
    comments = RelationshipFrom("Comment", "CONCERNING", cardinality=ZeroOrMore)

class Comment(DjangoNode):
    comment_id = UniqueIdProperty()
    date = DateTimeProperty(default=datetime.datetime.now())
    text = StringProperty(required=True)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)
    user = RelationshipFrom("User", "COMMENTED", cardinality=One)
    post = RelationshipTo("Post", "CONCERNING", cardinality=One)

class Tag(DjangoNode):
    tag_id = UniqueIdProperty()
    name = StringProperty(required=True)
    posts = RelationshipFrom("Post", "TAGGED", cardinality=ZeroOrMore)
    fields = RelationshipTo("Field", "FROM", cardinality=OneOrMore)

class Field(DjangoNode):
    field_id = UniqueIdProperty()
    name = StringProperty(required=True)
    tags = RelationshipFrom("Tag", "FROM", cardinality=ZeroOrMore)

# Create your models here.

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

    @property
    def serialize(self):
        return {
            'node_properties': {
                'post_id': self.post_id,
                'date': self.date,
                'link': self.link,
                'text': self.text,
                'upvoted': self.upvoted,
                'downvoted': self.downvoted,
                'tags': [x.tag_id for x in self.tags.all()],
                'user' : [x.user_id for x in self.user.all() ],
                'comments': [x.comment_id for x in self.comments.all()],
            },
        }


class Comment(DjangoNode):
    comment_id = UniqueIdProperty()
    date = DateTimeProperty(default=datetime.datetime.now())
    text = StringProperty(required=True)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)
    user = RelationshipFrom("User", "COMMENTED", cardinality=One)
    post = RelationshipTo("Post", "CONCERNING", cardinality=One)

    @property
    def serialize(self):
        return {
            'node_properties': {
                'comment_id': self.comment_id,
                'date': self.date,
                'text': self.text,
                'upvoted': self.upvoted,
                'downvoted': self.downvoted,
                'user' : [x.user_id for x in self.user.all() ],
                'posts': [x.post_id for x in self.post.all()],
            },
        }


class Tag(DjangoNode):
    tag_id = UniqueIdProperty()
    name = StringProperty(required=True)
    posts = RelationshipFrom("Post", "TAGGED", cardinality=ZeroOrMore)
    fields = RelationshipTo("Field", "FROM", cardinality=OneOrMore)

    @property
    def serialize(self):
        return {
            'node_properties': {
                'tag_id': self.tag_id,
                'name': self.name,
                'fields' : [x.field_id for x in self.fields.all() ],
                'posts': [x.post_id for x in self.posts.all()],
            },
        }


class Field(DjangoNode):
    field_id = UniqueIdProperty()
    name = StringProperty(required=True)
    tags = RelationshipFrom("Tag", "FROM", cardinality=ZeroOrMore)

    @property
    def serialize(self):
        return {
            'node_properties': {
                'field_id': self.field_id,
                'name': self.name,
                'tags':[x.tag_id for x in self.tags.all()],
            },
        }

# Create your models here.

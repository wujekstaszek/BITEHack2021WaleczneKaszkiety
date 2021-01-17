from neomodel  import StringProperty,DateTimeProperty,UniqueIdProperty,IntegerProperty,RelationshipTo,RelationshipFrom, Relationship, StructuredRel
from neomodel.cardinality import *
from django_neomodel import DjangoNode
from django.forms import ModelForm
import datetime

# Creating Relation classes below

#relation many to many
class VotingRel(StructuredRel):
    OPTIONS = {-1, 0, 1} #TO DO: NOT SURE IF THIS LINE WILL WORK!
    value = IntegerProperty(default=0, choices=OPTIONS)


#Creating Node classes below

class User(DjangoNode):
    user_id = UniqueIdProperty()
    name = StringProperty(required=True)
    email = StringProperty(required=True, UniqueIdProperty=True)
    posts = RelationshipTo("Post", "POSTED", cardinality=ZeroOrMore)
    comments = RelationshipTo("Comment", "COMMENTED", cardinality=ZeroOrMore)

    @property
    def serialize(self):
        return {
                'user_id': self.user_id,
                'name': self.name,
                'email': self.email,
                'posts': [x.post_id for x in self.posts.all()],
                'comments': [x.comment_id for x in self.comments.all()],
        }

    #those 4 functions below should be replaced with 1 - update_resource(value, resource)
    #It would be probably much more concise - but this can be rewritten later
    def upvote_post(self, post_id):
        rel = 0
        try: #validating if the post exists at all
            post = Post.nodes.get(post_id=post_id)
            print(post)
        except Exception as e:
            print("Ziomek, nie ma takiego postu!")
            print(e)
            return
        #checking if the relation already exists
        rel = post.votes.relationship(self)
        if rel == None:
            post.votes.connect(self) #if there no relation between this user and post - make it!
            rel = post.votes.relationship(self)

        if(rel.value == -1): #This guy already downvoted!
            rel.value = +1
            post.downvoted -= 1
            post.upvoted += 1
        elif(rel.value == +1): #This guy already upvoted - can not vote more!
            print("Dude u already upvoted!")
            pass
        elif(rel.value == 0): #This guy did not vote yet!
            rel.value = +1
            print("Before incrementing: {}".format(post.upvoted) )
            post.upvoted += 1
            print("After incrementing: {}".format(post.upvoted) )
        rel.save()
        post.save()
        self.save()

    def downvote_post(self, post_id):
        try:
            post = Post.nodes.get(post_id=post_id)
        except Exception as e: #no such post
            print(e)
            return
        rel = post.votes.relationship(self)
        if rel == None:
            post.votes.connect(self) #if there no relation between this user and post - make it!
            rel = post.votes.relationship(self)

        if(rel.value == -1): #This guy already downvoted!
            print("Dude u already downvoted!")
            pass
        elif(rel.value == +1): #This guy already upvoted!
            rel.value = -1
            post.upvoted -=1
            post.downvoted +=1
        elif(rel.value == 0): #This guy did not vote yet!
            rel.value = -1
            post.downvoted += 1
        rel.save()
        post.save()
        self.save()

    def downvote_comment(self, comment_id):
        try:
            comment = Comment.nodes.get(comment_id=comment_id)
        except Exception as e: #no such comment
            print(e)
            return
        rel = comment.votes.relationship(self)
        if rel == None: #if there no relation between this user and comment - make it!
            comment.votes.connect(self)
            rel = comment.votes.relationship(self)

        if(rel.value == -1): #This guy already downvoted!
            print("Dude u already downvoted!")
            pass
        elif(rel.value == +1): #This guy already upvoted!
            rel.value = -1
            comment.upvoted -=1
            comment.downvoted +=1
        elif(rel.value == 0): #This guy did not vote yet!
            rel.value = -1
            comment.downvoted += 1
        rel.save()
        comment.save()
        self.save()

    def upvote_comment(self, comment_id):
        try:
            comment = Comment.nodes.get(comment_id=comment_id)
        except Exception as e: #no such comment
            print(e)
            return
        rel = comment.votes.relationship(self)
        if rel == None: #if there no relation between this user and post - make it!
            comment.votes.connect(self)
            rel = comment.votes.relationship(self)

        if(rel.value == +1): #This guy already upvoted!
            print("Dude u already upvoted!")
            pass
        elif(rel.value == -1): #This guy already downvoted!
            rel.value = +1
            comment.downvoted -=1
            comment.upvoted +=1
        elif(rel.value == 0): #This guy did not vote yet!
            rel.value = +1
            comment.upvoted += 1
        rel.save()
        comment.save()
        self.save()

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

    votes = Relationship('User', 'RATED', model=VotingRel)

    @property
    def serialize(self):
        return {
                'post_id': self.post_id,
                'date': self.date,
                'link': self.link,
                'text': self.text,
                'upvoted': self.upvoted,
                'downvoted': self.downvoted,
                'tags': [x.tag_id for x in self.tags.all()],
                'user' : [x.name for x in self.user.all()],
                'comments': [x.comment_id for x in self.comments.all()],
        }


class Comment(DjangoNode):
    comment_id = UniqueIdProperty()
    date = DateTimeProperty(default=datetime.datetime.now())
    text = StringProperty(required=True)
    upvoted = IntegerProperty(default=0)
    downvoted = IntegerProperty(default=0)
    user = RelationshipFrom("User", "COMMENTED", cardinality=One)
    post = RelationshipTo("Post", "CONCERNING", cardinality=One)

    votes = Relationship('User', 'RATED', model=VotingRel)

    @property
    def serialize(self):
        return {
                'comment_id': self.comment_id,
                'date': self.date,
                'text': self.text,
                'upvoted': self.upvoted,
                'downvoted': self.downvoted,
                'user' : [x.user_id for x in self.user.all() ],
                'posts': [x.post_id for x in self.post.all()],
        }


class Tag(DjangoNode):
    tag_id = UniqueIdProperty()
    name = StringProperty(required=True, UniqueIdProperty=True)
    posts = RelationshipFrom("Post", "TAGGED", cardinality=ZeroOrMore)
    fields = RelationshipTo("Field", "FROM", cardinality=OneOrMore)

    @property
    def serialize(self):
        return {
                'tag_id': self.tag_id,
                'name': self.name,
                'fields' : [x.field_id for x in self.fields.all() ],
                'posts': [x.post_id for x in self.posts.all()],
        }


class Field(DjangoNode):
    field_id = UniqueIdProperty()
    name = StringProperty(required=True, UniqueIdProperty=True)
    tags = RelationshipFrom("Tag", "FROM", cardinality=ZeroOrMore)

    @property
    def serialize(self):
        return {
                'field_id': self.field_id,
                'name': self.name,
                'tags':[{"tag_id":x.tag_id,"name":x.name} for x in self.tags.all()],
        }

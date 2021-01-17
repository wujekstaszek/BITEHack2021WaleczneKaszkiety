from rest_framework import serializers
from .models import User, Post, Comment, Tag

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ("user_id", "name", "email", "posts", "comments")

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("url", "user", "link", "text", "upvoted", "downvoted", "tags", "user", "comments")

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment 
        fields = ("comment_id", "date", "text", "upvoted", "downvoted", "user", "post")

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ("tag_id", "name", "posts")

'''
class Query(ObjectType):
    user = graphene.Field(UserType, id=graphene.Int())
    post = graphene.Field(PostType, id=graphene.Int())
    comment = graphene.Field(CommentType, id=graphene.Int())
    tag = graphene.Field(TagType, id=graphene.Int())

    users = graphene.List(UserType)
    posts = graphene.List(PostType)
    comments = graphene.List(CommentType)
    tags = graphene.List(TagType)

    def resolve_user(self, info, **kwargs):
        id = kwargs.get("id")

        if id is not None:
            return User.objects.get(pk=id)

        return None

    def resolve_post(self, info, **kwargs):
        id = kwargs.get("id")

        if id is not None:
            return Post.objects.get(pk=id)

        return None

    def resolve_comment(self, info, **kwargs):
        id = kwargs.get("id")

        if id is not None:
            return Comment.objects.get(pk=id)

        return None

    def resolve_tag(self, info, **kwargs):
        id = kwargs.get("id")

        if id is not None:
            return Tag.objects.get(pk=id)

        return None


    def resolove_users(self, info, **kwargs):
        return User.objects.all()

    def resolove_posts(self, info, **kwargs):
        return Post.objects.all()

    def resolove_comments(self, info, **kwargs):
        return Comment.objects.all()
        
    def resolove_tags(self, info, **kwargs):
        return Tag.objects.all()

class UserInput(graphene.InputObjectType):
    user_id = graphene.ID()
    name = graphene.String()
    email = graphene.String()
    posts = graphene.List()
    comments = graphene.List()

class PostInput(graphene.InputObjectType):
    post_id = graphene.ID()
    date = graphene.DateTime()
    link = graphene.String()
    text = graphene.String()
    upvoted = graphene.Int()
    downvoted = graphene.Int()
    tags = graphene.List(TagInput)
    # user = ?
    comments = graphene.List()


class CommentInput(graphene.InputObjectType):
    comment_id = graphene.ID()
    date = graphene.DateTime()
    text = graphene.Int()
    downvoted = graphene.Int()
    # user = ?
    # post = ?

class TagInput(graphene.InputObjectType):
    tag_id = graphene.ID()
    name = graphene.String()
    # posts = graphene.List()?
'''
# schema = graphene.Schema(query=Query)
# schema = graphene.Schema(query=Query, mutation=Mutation)

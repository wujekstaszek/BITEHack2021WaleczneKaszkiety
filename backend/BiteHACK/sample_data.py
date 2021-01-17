from django.core.wsgi import get_wsgi_application
from WisHUB.models import *

app = get_wsgi_application()

def seed_database():

    #Users
    user_list = list()
    user_list.append( User(name="Mariusz Pudzianowski", email="pudzian@mail.com"))
    user_list.append( User(name="Tymoteusz Ciesielski", email="tymoteusz@mail.com"))
    user_list.append( User(name="Aleksander Morgała", email="aleks@mail.com") )
    user_list.append( User(name="Maciej Podbioł", email="maciek@mail.com") )
    user_list.append( User(name="Mateusz Górczany", email="mati@mail.com") )

    for user in user_list:
        user.save()

    #Fields
    field_list = list()
    field_list.append(Field(name="Mathematics"))
    field_list.append(Field(name="Physics"))
    field_list.append(Field(name="Programming"))
    field_list.append(Field(name="Informatics"))

    for field in field_list:
        field.save()

    #Tags
    tag_list = list()
    #Field Mathematics
    t1 = Tag(name="Vectors")
    t2 = Tag(name="Linnear regression")
    t3 = Tag(name="Taylor series")
    tag_list.append(t1)
    tag_list.append(t2)
    tag_list.append(t3)

    for tag in tag_list:
        tag.save()
        tag.fields.connect(Field.nodes.get(name="Mathematics"))
    tag_list.clear()

    #Field Physics
    t4 = Tag(name="Superconductivity")
    t5 = Tag(name="Magnetic levitation")
    #there is gonna be vector tag in this field as well
    tag_list.append(t4)
    tag_list.append(t5)

    for tag in tag_list:
        tag.save()
        tag.fields.connect(Field.nodes.get(name="Physics"))
    tag_list.clear()
    #vector has 2 tags
    t1.fields.connect(Field.nodes.get(name="Physics"))

    #Field programming
    t6 = Tag(name="Django")
    t7 = Tag(name="Diamond problem")
    t8 = Tag(name="HTML")
    tag_list.append(t6)
    tag_list.append(t7)
    tag_list.append(t8)

    for tag in tag_list:
        tag.save()
        tag.fields.connect(Field.nodes.get(name="Programming"))
    tag_list.clear()

    #Field informatics
    t9 = Tag(name="Binary search")
    t10 = Tag(name="Heapsort")
    t11 = Tag(name="One-hot encoding")
    t12 = Tag(name="Shannon entropy")
    tag_list.append(t9)
    tag_list.append(t10)
    tag_list.append(t11)
    tag_list.append(t12)

    for tag in tag_list:
        tag.save()
        tag.fields.connect(Field.nodes.get(name="Informatics"))
    tag_list.clear()


    #Posts
    post_list = list()
    post_list.append(Post(link="https://www.tutorialspoint.com/django/index.htm",
    text="This one is quite good and exhaustive :)",
    ))
    post_list.append(Post(text= "Pretty neat source of knowledge",link="https://realpython.com/tutorials/django/"))
    for post in post_list:
        post.save()
        post.tags.connect(Tag.nodes.get(name="Django"))
        post.user.connect(User.nodes.get(name="Tymoteusz Ciesielski"))
    post_list.clear()


    post_list = list()
    post_list.append(Post(link="https://en.wikipedia.org/wiki/Django_(web_framework)",
    text="Classic of studying :P"
    ))
    post_list.append(Post(link="https://docs.djangoproject.com/en/3.1/", text="Official django documentation, perfect for beginners"))

    for post in post_list:
        post.save()
        post.tags.connect(Tag.nodes.get(name="Django"))
        post.user.connect(User.nodes.get(name="Maciej Podbioł"))
    post_list.clear()




    post_list = list()
    post_list.append(Post(link="https://en.wikipedia.org/wiki/Binary_search_algorithm",
    text="Binnary search for dummies"
    ))
    post_list.append(Post(link="https://www.geeksforgeeks.org/binary-search/", text="GfG doing theirs job!"))
    post_list.append(Post(link="https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search", text="Walczene's Kaszkiety favorite tutorial!"))

    for post in post_list:
        post.save()
        post.tags.connect(Tag.nodes.get(name="Binary search"))
        post.user.connect(User.nodes.get(name="Mariusz Pudzianowski"))
    post_list.clear()

    #Comments
    comment_list = list()
    comment_list.append(Comment(text="Daję okejkę :)"))

    for comment in comment_list:
        comment.save()
        comment.user.connect(User.nodes.get(name="Mariusz Pudzianowski"))
        comment.post.connect(Post.nodes.get(text="This one is quite good and exhaustive :)"))
    comment_list.clear()

    comment_list = list()
    comment_list.append(Comment(text="Good for start!"))
    for comment in comment_list:
        comment.save()
        comment.user.connect(User.nodes.get(name="Aleksander Morgała"))
        comment.post.connect(Post.nodes.get(text="Classic of studying :P"))

    #upvoting some stuff
    u1 = User.nodes.get(name="Mariusz Pudzianowski")
    u1.upvote_post(Post.nodes.all()[0].post_id)
    u2 = User.nodes.get(name="Mateusz Górczany")
    u2.upvote_post(Post.nodes.all()[0].post_id)

    u3 = User.nodes.get(name="Aleksander Morgała")
    u3.upvote_post(Post.nodes.all()[1].post_id)

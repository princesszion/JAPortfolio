# from rest_framework import serializers
# from .models import BlogPost, Category

# class CategorySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Category
#         fields = ['id', 'name']

# class BlogPostSerializer(serializers.ModelSerializer):
#     category = CategorySerializer()
#     author = serializers.StringRelatedField()

#     class Meta:
#         model = BlogPost
#         fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author', 'category']


from rest_framework import serializers
from .models import BlogPost, Category, ContactMessage, User, BibleStudy

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BlogPostSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'content', 'thumbnail', 'created_at', 'updated_at', 'author', 'category']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['category'] = CategorySerializer(instance.category).data
        representation['author'] = str(instance.author)
        return representation

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class BibleStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = BibleStudy
        fields = '__all__'

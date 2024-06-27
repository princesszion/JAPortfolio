# from rest_framework import viewsets
# from .models import BlogPost, Category
# from .serializers import BlogPostSerializer, CategorySerializer
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
# from django.shortcuts import get_object_or_404

# class BlogPostViewSet(viewsets.ModelViewSet):
#     queryset = BlogPost.objects.all().order_by('-created_at')
#     serializer_class = BlogPostSerializer

#     def retrieve(self, request, pk=None):
#         queryset = BlogPost.objects.all()
#         post = get_object_or_404(queryset, pk=pk)
#         serializer = BlogPostSerializer(post)
#         return Response(serializer.data)

# class CategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer






from rest_framework import viewsets
from rest_framework import status
from .models import BlogPost, Category, ContactMessage
from .serializers import BlogPostSerializer, CategorySerializer, ContactMessageSerializer, BibleStudySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all().order_by('-created_at')
    serializer_class = BlogPostSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def retrieve(self, request, pk=None):
        queryset = BlogPost.objects.all()
        post = get_object_or_404(queryset, pk=pk)
        serializer = BlogPostSerializer(post)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all().order_by('-created_at')
    serializer_class = ContactMessageSerializer

@api_view(['POST'])
def submit_contact_form(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Message sent successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def submit_bible_study_form(request):
    serializer = BibleStudySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'You Have Seccesfully Registered!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

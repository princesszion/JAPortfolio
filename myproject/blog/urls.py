# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import BlogPostViewSet, CategoryViewSet

# router = DefaultRouter()
# router.register(r'blogposts', BlogPostViewSet)
# router.register(r'categories', CategoryViewSet)

# urlpatterns = [
#     path('api/', include(router.urls)),
# ]

# from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import BlogPostViewSet, CategoryViewSet, submit_contact_form

# router = DefaultRouter()
# router.register(r'blogposts', BlogPostViewSet)
# router.register(r'categories', CategoryViewSet)

# urlpatterns = [
#     path('api/', include(router.urls)),
#     path('api/submit-contact-form/', submit_contact_form, name='submit-contact-form'),
# ]


from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet, CategoryViewSet, ContactMessageViewSet, submit_contact_form, submit_bible_study_form

router = DefaultRouter()
router.register(r'blogposts', BlogPostViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'contactmessages', ContactMessageViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/submit-contact-form/', submit_contact_form, name='submit-contact-form'),
    path('api/submit-bible-study-form/', submit_bible_study_form, name='submit-bible-study-form'),


]


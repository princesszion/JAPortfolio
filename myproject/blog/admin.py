from django.contrib import admin

from .models import BlogPost, Category,ContactMessage,BibleStudy

admin.site.register(BlogPost)
admin.site.register(Category)
admin.site.register(ContactMessage)
admin.site.register(BibleStudy)

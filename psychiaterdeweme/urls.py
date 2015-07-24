from django.conf.urls import patterns, include, url
from django.conf import settings

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     url(r'^logout$', 'django.contrib.auth.views.logout', name='logout'),
    url(r'^login$', 'django.contrib.auth.views.login', name='login'),   
   (r'^', include('wiki.urls')),
   (r'^tinymce/', include('tinymce.urls')),
    # url(r'^frame/', include('frame.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),


    url(r'^admin/', include(admin.site.urls)),
)

if 'apps' not in settings.DIRNAME:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
        }),
   )
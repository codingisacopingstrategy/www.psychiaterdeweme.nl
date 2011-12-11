from django.conf.urls.defaults import *

from templatetags.wiki import WIKI_WORD


urlpatterns = patterns('psychiaterdeweme.wiki.views',
    (r'^$', 'index'),
    ('(?P<name>%s).html$' % r"(.*)", 'view'),
    ('(?P<name>%s).html/edit/$' % r"(.*)", 'edit'),
    (r'^update_order$', 'update_order')
)

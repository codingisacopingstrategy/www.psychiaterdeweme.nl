from django.conf.urls.defaults import *

from templatetags.wiki import WIKI_WORD


urlpatterns = patterns('psychiaterdeweme.wiki.views',
    (r'^$', 'index'),
    ('(?P<name>%s).html$' % WIKI_WORD, 'view'),
    ('(?P<name>%s).html/edit/$' % WIKI_WORD, 'edit'),
    (r'^update_order$', 'update_order')
)

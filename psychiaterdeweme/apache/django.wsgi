import os, sys
sys.path.append('/home/s/apps/psychiaterdeweme.nl')
os.environ['DJANGO_SETTINGS_MODULE'] = 'psychiaterdeweme.settings'

import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()
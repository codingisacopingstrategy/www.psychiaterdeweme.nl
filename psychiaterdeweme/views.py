from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.shortcuts import render_to_response


def tags():
    return photos

def home(request):
    petition = Vote.objects.all().order_by('-pub_date')
    return render_to_response('home.html',{'slug': 'home', 'petition': petition, 'count' : len(petition), 'photos': _photos()},context_instance=RequestContext(request))

def sign(request):
    p1 = User(full_name = request.POST['full_name'], email= request.POST['email'], function = request.POST['function'], join_date=datetime.datetime.now())
    p1.save()
    p2 = Vote(pub_date=datetime.datetime.now(),voter=p1)
    p2.save()
    return HttpResponseRedirect('/')

from django.shortcuts import render_to_response, redirect
from django.template import RequestContext

from forms import PageForm
from models import Page


def index(request):
    return view(request, "introductie")


def view(request, name):
    """Shows a single wiki page."""
    try:
        page = Page.objects.get(name=name)
    except Page.DoesNotExist:
        try:
            page = Page.objects.get(name=name.title())
        except Page.DoesNotExist:
            page = Page(name=name)

    context = {
        'page': page,
        'pages': Page.objects.all()
    }

    return render_to_response('wiki/view.html',
        RequestContext(request, context))


def edit(request, name):
    """Allows users to edit wiki pages."""
    try:
        page = Page.objects.get(name=name)
    except Page.DoesNotExist:
        try:
            page = Page.objects.get(name=name.title())
        except Page.DoesNotExist:
            page = Page(name=name)

    if request.method == 'POST':
        form = PageForm(request.POST)
        if form.is_valid():
            page.name = form.cleaned_data['name']
            page.content = form.cleaned_data['content']
            if not page.order:
                page.order = Page.objects.latest('order').order + 1            
            page.save()
            return redirect(view, name=page.name)
    else:
        if page:
            form = PageForm(initial=page.__dict__)
        else:
            form = PageForm(initial={'name': name})

    context = {
        'form': form,
        'page': page,
        'pages': Page.objects.all()
    }

    return render_to_response('wiki/edit.html',
        RequestContext(request, context))

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .forms import AddForm
from glowna.models import Event

def formularz(request):
    return render(request, 'formularz/formularz.html')

def add(request):
    if request.method == "POST":
        form = AddForm(data=request.POST)
        if form.is_valid():
            title = request.POST.get('title', '')
            place = request.POST.get('place', '')
            day = request.POST.get('day', '')
            month = request.POST.get('month', '')
            years = request.POST.get('years', '')
            hours = request.POST.get('hours', '')
            min = request.POST.get('min', '')
            link = request.POST.get('link', '')
            tags = request.POST.get('tags', '')
            description = request.POST.get('description', '')
            uwagi = request.POST.get('uwagi', '')
            event_obj = Event(nazwa=title, data=day+'.'+month+'.'+years, godzina=hours+'.'+min, miejsce=place, uwagi=uwagi, tags=tags, description=description, link=link)
            event_obj.save()
            template = loader.get_template('formularz/dodany.html')
            context = {'form': form}
            return HttpResponse(template.render(context, request))
        else:
            return HttpResponse("<h1>"+str(form.is_valid())+ str(form.errors)+ str(type(form.errors))+"</h1>")

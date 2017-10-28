from django.http import Http404
from django.shortcuts import render
from .models import Event

def glowna(request):
    all_events = Event.objects.all()
    context = {"all_events": all_events,}
    return render(request, 'glowna/index.html', context)

def detail(request, Event_id):
    try:
        event = Event.objects.get(pk=Event_id)
    except Event.DoesNotExist:
        raise Http404("Nie ma takiego wydarzenia")
    return render(request, 'glowna/detail.html', {"event":event})



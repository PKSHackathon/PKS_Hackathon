from django.shortcuts import render, get_object_or_404
from .models import Event

def glowna(request):
    all_events = Event.objects.all()
    context = {"all_events": all_events,}
    return render(request, 'glowna/index.html', context)

def detail(request, Event_id):
    event = get_object_or_404(Event, pk=Event_id)
    return render(request, 'glowna/detail.html', {"event":event})



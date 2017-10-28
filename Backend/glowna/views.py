from django.http import HttpResponse
from django.template import loader
from .models import Event

def glowna(request):
    all_events = Event.objects.all()
    template = loader.get_template('glowna/index.html')
    context = {
        "all_events": all_events,
    }
    return HttpResponse(template.render(context, request))


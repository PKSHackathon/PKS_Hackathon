from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.glowna, name='glowna'),
    #/event/event_id
    url(r'^(?P<Event_id>[0-9]+)/$', views.detail, name='detail'),
]
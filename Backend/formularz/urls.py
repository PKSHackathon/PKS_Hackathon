from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.formularz, name='formularz'),
    url(r'^add$', views.add, name='add'),
]
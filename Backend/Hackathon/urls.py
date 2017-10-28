from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^$', include('glowna.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^formularz/', include('formularz.urls')),
]

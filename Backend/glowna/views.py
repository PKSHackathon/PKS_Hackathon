from django.http import HttpResponse

def glowna(request):
    return HttpResponse("<h1>Główna strona </h1>")


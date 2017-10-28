from django.db import models

class Event(models.Model):
    nazwa = models.CharField(max_length=250)
    data = models.CharField(max_length=10)
    godzina = models.CharField(max_length=10)
    miejsce = models.CharField(max_length=250)
    uwagi = models.CharField(max_length=500)

    def __str__(self):
        return self.nazwa + " - " + self.miejsce
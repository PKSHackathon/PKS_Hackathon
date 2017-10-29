from django import forms

class AddForm(forms.Form):
    title = forms.CharField(max_length=250)
    place = forms.CharField(max_length=250)
    day = forms.CharField(max_length=10)
    month = forms.CharField(max_length=10)
    years = forms.CharField(max_length=250)
    hours = forms.CharField(max_length=10)
    min = forms.CharField(max_length=10)
    link = forms.CharField(max_length=500, required=False)
    tags = forms.CharField(max_length=250)
    description = forms.CharField(max_length=500)
    uwagi = forms.CharField(max_length=250, required=False)

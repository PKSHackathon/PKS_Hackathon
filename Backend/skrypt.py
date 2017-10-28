import openpyxl
wb = openpyxl.load_workbook('baza.xlsx')
event = wb.get_sheet_by_name('Arkusz1')
for i in range(4, 54, 1):
    a = Event()
    a.nazwa = event.cell(row=i, column=2).value
    a.data = event.cell(row=i, column=3).value
    a.godzina = event.cell(row=i, column=4).value
    a.miejsce = event.cell(row=i, column=5).value
    a.uwagi = event.cell(row=i, column=6).value
    a.save()
    del a
import openpyxl
wb = openpyxl.load_workbook('baza.xlsx')
wb.get_sheet_names()
event = wb.get_sheet_by_name('Arkusz1')
for i in range(4, 54, 1):
    for z in range(2, 7, 1):
        a = (nazwa="event.cell(row=i, column=2).value",data="event.cell(row=i, column=3).value",godzina="event.cell(row=i, column=3).value", miejsca="event.cell(row=i, column=4).value",uwagi="event.cell(row=i, column=5).value")
        a.save()
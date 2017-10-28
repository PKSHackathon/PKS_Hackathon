import openpyxl
z = 0
wb = openpyxl.load_workbook('baza.xlsx')
wb.get_sheet_names()
event = wb.get_sheet_by_name('Arkusz1')
for i in range(4,54,1):
    for z in range(2, 7, 1):
        if event.cell(row=i, column=z).value:
            print(event.cell(row=i, column=z).value)

    else:
        z += 1


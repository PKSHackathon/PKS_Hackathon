import openpyxl
wb = openpyxl.load_workbook('baza.xlsx')
wb.get_sheet_names()
sheet = wb.get_sheet_by_name('Arkusz1')
for i in range(4,53,1):
    if sheet.cell(row=i, column=2).value != None:
        print(i, sheet.cell(row=i, column=2).value)
    else:
        print(i, sheet.cell(row=i+1, column=2).value)

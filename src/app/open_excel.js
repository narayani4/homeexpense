export function openexcel()
{
var Excel = new ActiveXObject("Excel.Application");
    Excel.Visible = true;
    Excel.Workbooks.Open('Book1.xlsx');
    var Excel;
}
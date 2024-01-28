function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('漆屋功能')
      .addItem('test', 'showSidebar')
      .addToUi();
}



function showSidebar() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("no_acumulation");
  sheet.activate();
  
  var html = HtmlService.createHtmlOutputFromFile('options')
      .setTitle('請選擇日期範圍');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function processForm(formObject){

  //close the sidebar
  var html = HtmlService.createHtmlOutput("<script>google.script.host.close();</script>");
  SpreadsheetApp.getUi().showSidebar(html);

  //get the data of from from sidebar html file
  var sd = formObject.sd;
  var ed = formObject.ed;
  console.log('起始與結束日期:'+sd+"~"+ed);
  Logger.log('起始與結束日期:'+sd+"~"+ed);
  FitingData(sd,ed);
}
//gen each element and let they do their demand routine
function testListDatesBetween(sd,ed,initialElement) {
  var startDate = sd;
  var endDate = ed;
  var dates = listDatesBetween(startDate, endDate);
  var i=0;

  dates.forEach(function(date) {
    console.log(date.toDateString());
    ss.getRange( i+1,initialElement , 1, 1).setValue(date.toDateString);
    i++;
  });
}



function FitingData(sd,ed) {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  let startElement=D1;
  
  testListDatesBetween(sd,ed,startElement);

    

  // var lastColumn = ss.getLastColumn();
  // var lastRow = ss.getLastRow();
  // var arry_0=ss.getSheetValues(1,1,lastRow,lastColumn);
  // Logger.log(arry_0);
  // createNewSheet();
  // SpreadsheetApp.getActive().getSheetByName('篩選結果')
  // getRowFitRange(Alast,arry_0,Date.parse(sd),Date.parse(ed),sheet);
  
}
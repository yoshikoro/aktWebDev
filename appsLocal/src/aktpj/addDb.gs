function formatdb(){
  var tempid = PropertiesService.getScriptProperties().getProperty("dbid");
  var data = SpreadsheetApp.openById(tempid).getSheets()[0].getDataRange().getValues();
  var csvdata = sendForm(theForm);
  //data = [][];
    for (var i = 0; i < csvdata.length; i++){
      //0,6,7,8,9,26,32,34,39(必要)追加するルーティンを作成20170401～
      var element = array[i];
       data[localRow] = new Array();//２次元配列化
        data[localRow].push(localRow + 1);//a
    }
}

function sheetDataAdd(dataArray){
  var tempid = PropertiesService.getScriptProperties().getProperty("dbid");
  var sh = SpreadsheetApp.openById(tempid).getSheets()[0];
  var json = JSON.parse(dataArray);
  //data.push(mgrn);
 // sh.appendRow([mgrn,]);
  sh.appendRow(json);
}
function sssendForm(theForm) {
  var fileBlob = theForm.myFile;
  return csvChange(fileBlob);
}

function csvChange(filelist){
//{@pram Drivefileiterator @ret 2DimarryformObj}
 var blob = filelist.getBlob().getDataAsString("Shift_JIS");
 var data = Utilities.parseCsv(blob);
 return data;
}

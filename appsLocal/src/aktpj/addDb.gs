function formatdb(){
  var tempid = properties.getProperty("tempid");
  var data = SpreadsheetApp.openById(tempid).getSheets()[0].getDataRange().getValues();
        
        data[localRow] = new Array();//２次元配列化
        data[localRow].push(localRow + 1);//a
        data[localRow].push(data[i][0]);//b
        data[localRow].push(data[i][8]);//c
}

function sendForm(theForm) {
  var fileBlob = theForm.myFile;
  return csvChange(fileBlob);
}

function csvChange(filelist){
//{@pram Drivefileiterator @ret 2Dimarrydata}
 var blob = filelist.getBlob().getDataAsString("Shift_JIS");
 var data = Utilities.parseCsv(blob);
 return data;
}

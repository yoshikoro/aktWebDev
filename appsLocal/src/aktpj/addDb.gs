/**
 * つくりかけ
 */
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

/**
 * フォーム入力されたデータを対象のシートに入力する関数
 * @param {String[]} dataArray フォーム入力されたデータ配列 
 * @return {void} 
 */
function sheetDataAdd(dataArray){
  var tempid = PropertiesService.getScriptProperties().getProperty("dbid");
  var sh = SpreadsheetApp.openById(tempid).getSheets()[0];
  var json = JSON.parse(dataArray);
  sh.appendRow(json);
}
/**
 * 
 * @param {Object} theForm フォームオブジェクト 
 * @return {String[][]} twoDimensionalData ２次元データ配列
 */
function addFile(theForm) {
  var fileBlob = theForm.myFile;
  var blob = fileBlob.getBlob().getDataAsString("Shift_JIS");
  var twoDimensionalData = Utilities.parseCsv(blob);
  return twoDimensionalData;
}
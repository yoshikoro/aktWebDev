/**
 * 
 * @param {String} machineCodeStr　照合する番号 
 * @return {Object} dataObj　一致したデータ
 * 
 */
function mydatabese(machineCodeStr) {
  var properties = PropertiesService.getScriptProperties();
  var machineid = properties.getProperty("dbid");
  var tempid = properties.getProperty("tempid");
  var data = SpreadsheetApp.openById(machineid).getSheets()[0].getDataRange().getValues();
  var tempdataArray = SpreadsheetApp.openById(tempid).getSheets();
  var dataObj = {};
  for (var i = 1;i <= data.length - 1;i++){
    var dataCode = data[i][0].toString();
    if(machineCodeStr == dataCode){
      dataObj.auth = "ファイルを作成しています";
      dataObj.mgrn = data[i][0].toString();
      dataObj.code = data[i][1].toString().substr(0,3);
      dataObj.mgnm = data[i][2].toString();
      dataObj.abil = data[i][3].toString();
      dataObj.model = data[i][4].toString();
      dataObj.limit = data[i][5].toString();
      dataObj.buy = data[i][6].toString();
      dataObj.hour = data[i][7].toString();
      dataObj.serial = data[i][8].toString();
      return JSON.stringify(dataObj)
     }
  }
  dataObj.auth = "nodata"
  return JSON.stringify(dataObj)
}


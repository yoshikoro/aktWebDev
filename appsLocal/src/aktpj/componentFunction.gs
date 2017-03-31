function mydatabese(machineCodeStr) {
  var properties = PropertiesService.getScriptProperties();
  var machineid = properties.getProperty("dbid");
  var tempid = properties.getProperty("tempid");
  var data = SpreadsheetApp.openById(machineid).getSheets()[0].getDataRange().getValues();
  var tempdataArray = SpreadsheetApp.openById(tempid).getSheets();
  for (var i = 1;i <= data.length - 1;i++){
    var dataCode = data[i][0].toString();
    if(machineCodeStr == dataCode){
      this.mgrn = data[i][0].toString();
      this.code = data[i][6].toString().substr(0,3);
      this.mgnm = data[i][7].toString();
      this.abil = data[i][8].toString();
      this.model = data[i][9].toString();
      this.limit = data[i][26].toString();
      this.buy = data[i][32].toString();
      this.hour = data[i][34].toString();
      this.serial = data[i][39].toString();
      return this
     }
  }
  return "nodata"
}

function tes(){
var iam = new mydatabese("320227");
Logger.log(iam);
}
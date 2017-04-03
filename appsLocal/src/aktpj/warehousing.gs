function inspectionSheetEdit(dataObj) {
   var myday = Utilities.formatDate(new Date() , 'Asia/Tokyo' , 'YYYY/MM/dd');
   var tempId = PropertiesService.getScriptProperties().getProperty("tempid");
   var sp = SpreadsheetApp.openById(tempId);
   var settingdata = sp.getSheetByName("setting").getDataRange().getValues();
   var sheets = sp.getSheets();
     for(var i in sheets){
       if(dataObj.code == sheets[i].getName()){
         var newSp = SpreadsheetApp.create(myday + ":" + dataObj.mgrn);
         var target = sp.getSheetByName(sheets[i].getName()).copyTo(newSp);
         break;
       }
     }
     var targetValues = target.getDataRange().getValues();
       targetValues[settingdata[1][1]][settingdata[1][2]] = dataObj.mgrn
  return machineObj
}

function test(){
 mydatabese("");

}
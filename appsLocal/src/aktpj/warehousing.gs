function inspectionSheetEdit(dataObj) {
   var obj = JSON.parse(dataObj);
   var myday = Utilities.formatDate(new Date() , 'Asia/Tokyo' , 'YYYY/MM/dd');
   var tempId = PropertiesService.getScriptProperties().getProperty("tempid");
   var sp = SpreadsheetApp.openById(tempId);
   var settingdata = sp.getSheetByName("setting").getDataRange().getValues();
   var sheets = sp.getSheets();
     for(var i in sheets){
       if(obj.code != sheets[i].getName()){
         continue;
       }else{
         var newSp = SpreadsheetApp.create(obj.mgrn);
         var target = sp.getSheetByName(sheets[i].getName());
         target.copyTo(newSp).setName(sheets[i].getName());
         newSp.deleteSheet(newSp.getSheets()[0]);
       }
     }
     if(newSp == undefined){
       var newSp = SpreadsheetApp.create(obj.mgrn);
       var target = sp.getSheetByName("ETC");
       target.copyTo(newSp).setName("ETC");
       newSp.deleteSheet(newSp.getSheets()[0]);
     }
     var targetValues = newSp.getSheets()[0].getDataRange().getValues();
       targetValues[settingdata[1][1]][settingdata[1][2]] = obj.mgrn
       targetValues[settingdata[2][1]][settingdata[2][2]] = obj.mgnm
       targetValues[settingdata[3][1]][settingdata[3][2]] = obj.abil
       targetValues[settingdata[4][1]][settingdata[4][2]] = obj.model
       targetValues[settingdata[5][1]][settingdata[5][2]] = obj.serial
       targetValues[settingdata[6][1]][settingdata[6][2]] = myday
       targetValues[settingdata[7][1]][settingdata[7][2]] = obj.hour
       targetValues[settingdata[8][1]][settingdata[8][2]] = obj.limit
       newSp.getSheets()[0].getDataRange().setValues(targetValues);
  return "作成完了"
}


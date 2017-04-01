function mydatabese(machineCodeStr) {
  var properties = PropertiesService.getScriptProperties();
  var machineid = properties.getProperty("dbid");
  var tempid = properties.getProperty("tempid");
  var data = SpreadsheetApp.openById(machineid).getSheets()[0].getDataRange().getValues();
  var tempdataArray = SpreadsheetApp.openById(tempid).getSheets();
  for (var i = 1;i <= data.length - 1;i++){
    var dataCode = data[i][0].toString();
    if(machineCodeStr == dataCode){
      this.auth = "ファイルを作成しています";
      this.mgrn = data[i][0].toString();
      this.code = data[i][1].toString().substr(0,3);
      this.mgnm = data[i][2].toString();
      this.abil = data[i][3].toString();
      this.model = data[i][4].toString();
      this.limit = data[i][5].toString();
      this.buy = data[i][6].toString();
      this.hour = data[i][7].toString();
      this.serial = data[i][8].toString();
      return JSON.stringify(this)
     }
  }
  this.auth = "nodata"
  return JSON.stringify(this)
}

function human(namedata){ //シート作成用重複カウント　param = arrey
 var cntarr = [];
 var humarr = overrapless(namedata);
 var flag = false;
  for (var i = 0 ;i<=humarr.length-1;i++){
   var cnt = 0;
   var nameI = humarr[i];
    for (var j = 0 ;j<=namedata.length;j++){
     var nameJ = namedata[j];
     if (nameI == nameJ) {
      cnt = cnt + 1;
     }
    }//j
   cntarr.push(nameI);
   cntarr.push(cnt);
  }//i
 return cntarr; //name,cnt
}//fuc


function overrapless(datarr){ //シート作成用重複削除 pram arrey
 var val = [];
  for (var i = 0 ;i <= datarr.length;i++){
   var data = datarr[i];
   var flag = true;
    if (i == 0){
     val.push(data);
    continue;
    }
    for (var j = 0 ;j<=val.length;j++){
     if (data == val[j]) {
      flag = false;
     break;  
     }
    }
   if (flag){
    val.push(data);
   }
  }
 return val;
}

function arry(arr,blankChangeStr){//２次元処理
 var hud2dim = new Array;
 var huarr = [];
 var cntarr = []; 
  for( var i = 0 ; i<=arr.length-1 ; i = i + 2){
   if (arr[i] == ""){
   arr[i] = blankChangeStr;//"未入力";
}
huarr.push(arr[i]);
cntarr.push(arr[i + 1]);
}

for (i = 0 ; i<=cntarr.length-1 ; i++){
hud2dim[i] = new Array;
hud2dim[i][1] = cntarr[i];
hud2dim[i][0] = huarr[i];
}
//Logger.log(hud2dim);
//var numRows = hud2dim.length;
//var ss = SpreadsheetApp.getActiveSheet().getRange(2, 2, numRows, 2).setValues(hud2dim);
return hud2dim;
}

function arrdel(clno,frarr){//@pram = str1,str2 ,ret = flag
 if(clno==undefined){
  return;
 }
 var len = frarr.length
 var flag = false;
  for(var i=0 ;i<=len ; i++){
   if(clno != frarr[i]){
    continue;
   }
   if(clno == frarr[i]){
    flag = true;
    return flag;
   }
  }//i
return flag;
}

function mvFile(FilesNameArray,switchflg){
  //moveFilesArray = [];
  var fldId = PropertiesService.getScriptProperties().getProperty("fldid");
  var compfldId = PropertiesService.getScriptProperties().getProperty("compfldid");
  try{
    var folder = DriveApp.getFolderById(fldId);
    var targetfolder = DriveApp.getFolderById(compfldId);
    var files = folder.getFiles();
  }catch(e){
    if(folder == undefined){return}
    if(targetfolder == undefined){return}
  }
  
  switch(switchflg){
  case 1:
    while(files.hasNext()){
    var file = files.next();
    FilesNameArray.forEach(function(element) {
     if(element == fileName.getName()){
       targetfolder.addFile(file);
       folder.removeFile(file);
     } 
    }())}
    break;
  case 2:
    var fileName = [];
    var num = 0;
    while (files.hasNext()) {
      var file = files.next();
      fileName[num] =new Array;;
      fileName[num].push(file.getName());
      fileName[num].push("<a href=" + file.getUrl() + " target=_blank>"　+ file.getName() +　"ファイルへのリンク</a>");
      num++
    }
    return JSON.stringify(fileName)
    break;
  case 3:
    mvRoot(FilesNameArray,folder)
    break;
}
return "ret"
}

function mvRoot(fileId,folder){
  var affilFolder = DriveApp.getFileById(fileId).getParents().next();
  var file = DriveApp.getFileById(fileId);
  folder.addFile(file);
  affilFolder.removeFile(file);
}


function arr1Dim(arrTwoDimension,Dimension,sepNo){//ret = 1DimArray
var arr = [];
  for(var i = 0;i<=sepNo;i++){
  arr.push(arrTwoDimension[Dimension][i]);
  }
 return arr
}

function arr2Dim(arr,Separator){//ret=2DimArray @{arr=Array Separator = int}
  var result = arr.length/Separator;
  var arr2Dim = [];
    for (var i = 0;i<=result-1;i++){
      arr2Dim[i] = new Array;
       for(var j = 0;j<=11;j++){
         arr2Dim[i].push(arr.shift());
       }
    }
  var arry = arr1Dim(arr2Dim,0,11)
}


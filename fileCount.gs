//notCompフォルダー内のファイル　@parm = strName ret = nameArray
function fldCts(folderName) {
var ftl = DriveApp.getFoldersByName(folderName).next().getFiles(); 
var fileName = [];
while (ftl.hasNext()) {
  var file = ftl.next().getName();
  fileName.push(file + "<br>");
  }
return fileName
}

function flcount(){
var fileCount = fldCts("notComp");
Logger.log(fileCount);
}
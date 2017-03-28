/**
 * var fileNameArray = fldCts("targetFolder");
 * @pram{String} folderNameString
 * @return{String[]} fileNameString
 */
function fldCts(folderName) {
var ftl = DriveApp.getFoldersByName(folderName).next().getFiles(); 
var fileName = [];
while (ftl.hasNext()) {
  var file = ftl.next().getName();
  fileName.push(file + "<br>");
  }
return fileName
}

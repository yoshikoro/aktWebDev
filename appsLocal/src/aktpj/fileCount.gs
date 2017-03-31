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


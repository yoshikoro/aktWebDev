/**
 * ファイルを移動及びフォルダ内のファイルを列挙する関数
 * @param {String[]} FilesNameArray 移動対象のファイル名配列 
 * @param {Number} switchflg 移動か列挙を切り替える数字
 * @param {Number} switchflg case:1 移動する処理
 * @param {Number} switchflg case:2 ファイルを列挙する処理
 * @param {Number} switchflg case:3 初期作成時のファイルを移動する処理
 * @return {String} String case:1,3 完了文字列
 * @return {String[][]} fileName ファイル名称とURLの２次元配列  
 */
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
return "完了"
}

/**
 * 
 * @param {String} fileId 対象ファイルのId 
 * @param {obj} folder 対象フォルダオブジェクト 
 */
function mvRoot(fileId,folder){
  var affilFolder = DriveApp.getFileById(fileId).getParents().next();
  var file = DriveApp.getFileById(fileId);
  folder.addFile(file);
  affilFolder.removeFile(file);
}
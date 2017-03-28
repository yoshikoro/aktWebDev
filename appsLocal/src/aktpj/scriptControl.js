/**
* delete trigger
*　トリガー削除関数です
*　パラメータに指定した関数名以外を全て削除します
* @param{String[]} 関数名の配列
* @return{Void}
*/
function deleteScriptControl(exceptFuncNameArray){
  if(!Array.isArray(exceptFuncNameArray)){
    exceptFuncNameArray = []
  }
  ScriptApp.getProjectTriggers().forEach(function(val){
    var flag = false
    exceptFuncNameArray.forEach(function(value){
        if(val.getHandlerFunction() == value){
          flag = true
        return
      }
    })
   if(flag){
     return
   }else{
      ScriptApp.deleteTrigger(val)
   }
 })
}

/**
* make trigger
* @pram{String} functionNameはトリガーしたい関数名
* @pram{String} atHour後に発動
* @return{Void}
*/
function addScriptControl(functionName,atHour){
    ScriptApp.newTrigger(functionName)
    .timeBased()
    .after(1000*60*60*atHour)
    .create();
} 

// 削除ルーチンを作成する
//originaldataフォルダ内を巡回して
//対象ファイルを削除
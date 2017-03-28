/**
 * 
 * @param {String} ゼロ埋めしたい文字列 
 * @param {Number} padingQty　ゼロ埋めしたい文字の長さ 
 */
function zeropad(value,padingQty) { 
  var str = ""; 
  var end = 0 - padingQty;
  padingQty = padingQty-1;
    for(var i = 0;i <= padingQty;i++){
      str = str.toString() + "0";
    }
  var con = [];
  con.push(value);//得意先コード処理
  if (con.length<padingQty){
    value = (value).toString();
    value = (str+value).slice(end);
    con.push(value);
    con.shift();
  }
  return con;
}
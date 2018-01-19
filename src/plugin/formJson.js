/**
 * Created by Administrator on 2018/1/19.
 */

export default {
  formJson:function (form) {
    var obj={}
    for(var i=0;i<form.length;i++){
      obj[form[i].name]=form[i].value
    }
    return obj;
  }
}

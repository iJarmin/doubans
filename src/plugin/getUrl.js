/**
 * Created by Administrator on 2018/1/18.
 */
module.exports.plugin = {
  getQueryString: function (name) {
    var url = window.location.hash;
    var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)");
    var result = url.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }
}

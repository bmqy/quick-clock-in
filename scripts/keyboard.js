/*
 * @Author: bmqy
 * @Date: 2020-02-28 13:37:23
 * @LastEditTime: 2020-03-02 17:42:15
 * @Description: 快速输入打卡文本
 */

var prefs = require('scripts/prefs');
var { getDaKaText } = require('scripts/fun');
var str = getDaKaText(prefs);

(function () {
  // 输入文本到当前输入框
  $keyboard.insert(str);
})()
/*
 * @Author: bmqy
 * @Date: 2020-02-28 13:37:23
 * @LastEditTime: 2020-03-03 09:01:41
 * @Description: 快速输入打卡文本
 */
function init() {
  if($app.env == $env.keyboard){
    require('scripts/keyboard');
  } else {
    require('scripts/main');
  }
}

module.exports = {
  init
}
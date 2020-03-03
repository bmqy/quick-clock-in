/*
 * @Author: bmqy
 * @Date: 2020-02-28 13:37:23
 * @LastEditTime: 2020-03-02 17:41:31
 * @Description: 快速输入打卡文本
 */
// 获取用户配置
const Prefs = {    
  Department : $prefs.get('user.department'),
  Name : $prefs.get('user.name'),
  ShowYear : $prefs.get('config.showYear'),
  ShowSeconds : $prefs.get('config.showSeconds'),
  FillDateZero : $prefs.get('config.fillDateZero'),
  FillTimeZero : $prefs.get('config.fillTimeZero'),
  AM : $prefs.get('config.am'),
  PM : $prefs.get('config.pm'),
  ListStyle : $prefs.get('config.listStyle'),
}

module.exports = Prefs
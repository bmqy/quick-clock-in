/*
 * @Author: bmqy
 * @Date: 2020-02-28 13:37:23
 * @LastEditTime: 2020-03-03 13:09:10
 * @Description: 快速输入打卡文本
 */
// 返回打卡文本信息
function getDaKaText(prefs){
  let aListStyle = ['、', '. '];  
  let theListStyle = aListStyle[prefs.ListStyle];

  let theDateTime = getDateTime(prefs);
  let workStatus = getWorkStatus(prefs);

  return `${theListStyle}${prefs.Department} ${prefs.Name} ${theDateTime} ${workStatus}打卡`;
}

// 获取当前时间
function getDateTime(prefs) {
  let now = new Date();
  let year = now.getFullYear();
  let month = (prefs.FillDateZero) ? ('0' + (now.getMonth() + 1)).slice(-2) : (now.getMonth() + 1);
  let day = (prefs.FillDateZero) ? ('0' + now.getDate()).slice(-2) : now.getDate();
  let hour = (prefs.FillTimeZero) ? ('0' + now.getHours()).slice(-2) : now.getHours();
  let minutes = (prefs.FillTimeZero) ? ('0' + now.getMinutes()).slice(-2) : now.getMinutes();
  let seconds = (prefs.FillTimeZero) ? ('0' + now.getSeconds()).slice(-2) : now.getSeconds();

  let tmp = '';
  if (prefs.ShowYear) {
    tmp += year + '年';
  }
  tmp += month + '月' + day + '日 ' + hour + ':' + minutes;
  if (prefs.ShowSeconds) {
    tmp += ':' + seconds;
  }

  return tmp;
}

// 获取工作状态
function getWorkStatus(prefs) {
  let now = new Date();
  let theDate = now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate()

  let arrAM= ["08:00-12:00", "08:30-12:00", "09:30-12:00", "10:00-12:00"];
  let arrPM= ["13:00-17:30", "13:30-17:30", "14:00-17:30", "14:00-18:00"];

  let aAM = arrAM[prefs.AM].split('-');
  let aPM = arrPM[prefs.PM].split('-');

  if (now >= new Date(theDate + ' ' + aAM[0]) && now <= new Date(theDate + ' ' + aAM[1]) || now >= new Date(theDate + ' ' + aPM[0]) && now <= new Date(theDate + ' ' + aPM[1])) {
    return '上班';
  } else {
    return '下班';
  }
}

module.exports = {
  getDaKaText
}
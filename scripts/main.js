/*
 * @Author: bmqy
 * @Date: 2020-02-28 13:37:23
 * @LastEditTime: 2020-03-02 17:54:33
 * @Description: 快速输入打卡文本
 */

(function(){
  var prefs = require('scripts/prefs');  
  var {getDaKaText} = require('scripts/fun');
  var str = getDaKaText(prefs);
  
  $ui.render({
    props: {
      title: "打卡信息预览",
      navButtons: [
        {
          title: "设置",
          handler: () => {
            $prefs.open();
          }
        }
      ]
    },
    views: [
      {
        id: 'list',
        type: 'list',
        props: {
          footer: {
            id: 'footer',
            type: "label",
            props: {
              height: 20,
              text: "©2019 bmqy",
              textColor: $color("#AAAAAA"),
              align: $align.center,
              font: $font(12)
            }
          },
          rowHeight: 60,
          separatorHidden: true,
          data: [
            {
              type: "text",
              props: {
                id: 'output',
                text: `1${str}`
              },
              layout: $layout.fill
            },
            {
              type: "button",
              props: {
                title: "测试打卡",
                contentEdgeInsets: $insets(10, 10, 10, 10)
              },
              layout: function (make, view) {
                make.center.equalTo(view.super)
              },
              events: {
                tapped: function (sender) {
                  let prefs = {
                    Department: $prefs.get('user.department'),
                    Name: $prefs.get('user.name'),
                    ShowYear: $prefs.get('config.showYear'),
                    ShowSeconds: $prefs.get('config.showSeconds'),
                    FillDateZero: $prefs.get('config.fillDateZero'),
                    FillTimeZero: $prefs.get('config.fillTimeZero'),
                    AM: $prefs.get('config.am'),
                    PM: $prefs.get('config.pm'),
                    ListStyle: $prefs.get('config.listStyle'),
                  };
                  
                  let str = getDaKaText(prefs);
                  $('output').text = `1${str}`;
                  
                }
              }
            }
          ]
        },
        layout: $layout.fill
      },
      
    ]
  });
})();
// 获取应用实例
let app = getApp();

let wxParser = require('../../wxParser/index');

Page({
  data: {},
  onLoad: function () {
    let that = this;
    let html = `<a href="/pages/logs/logs">文本内容</a><br><p class="test-class-name" style="text-align: center;" style="color: #ccc;">p 直属内容<u><i><strike color="#f00">tes<b color="#000">t</b></strike></i></u></p><p style="text-align: center;" checked width="100"><img src="https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/3.png?t=2017213" alt="image"></p><p style="text-align: center; "><b style="background-color: rgb(146, 208, 80);">&nbsp; &nbsp; 分类 &nbsp; &nbsp;&nbsp;</b></p><p style="text-align: center; "><span style="background-color: rgb(255, 255, 255);">&nbsp; <span style="color:#ff0000"><span style="font-size:10px">介</span><span style="font-size:12px">绍</span><font size="3">信</font><font size="4">息</font><font size="5">哈</font><font size="6">哈</font><font size="7">哈</font></span></span></p>`;
    wxParser.parse({
      bind: 'richText',
      html: html,
      target: that,
      enablePreviewImage: false,
      tapLink: (url) => {
        wx.navigateTo({
          url
        })
      }
    });
  }
})

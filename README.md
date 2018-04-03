* 注：wxParser 已提供小程序插件版 [wxParser-plugin](https://github.com/ifanrx/wxParser-plugin)，使用起来更加简单快捷

### 步骤

---

1. 把 `wxParser` 目录放到小程序项目的根目录下
2. 在需要富文本解析的 `WXML` 内引入 `wxParser/index.wxml`
3. 在页面 `JS` 文件内使用 `wxParser.parse(options)` 方法解析 `HTML` 内容
4. 在小程序项目根目录的 `app.wxss` 内引入 `wxParser` 的默认样式库

---

**`wxParser.parse(options)` 方法的 `options` 参数说明**

| 参数名 | 类型   | 必填 |描述 |
| :---:  | :----: | :----: |:----: |
| bind | String | 是 | 要绑定的数据名称 |
| html | String | 是 | HTML 内容 |
| target | Object | 是 | 绑定数据的模块对象 |
| enablePreviewImage | Boolean | 否 | 是否启用富文本内的图片预览功能，默认是 |
| tapLink | Function | 否 | 点击超链接时的回调函数 |

### 示例

---

**WXML：在需要用到富文本解析的文件夹下的 WXML 中引入 wxParser/index.wxml**

```
// 将 WXML 引入需要富文本解析的文件下
<import src="../../wxParser/index.wxml"/>
<view class="wxParser">
  <template is="wxParser" data="{{wxParserData:richText.nodes}}"/>
</view>
```

**JS：在需要用到富文本解析的文件夹下的 JS 中引入 wxParser 渲染引擎**

```
const wxParser = require('../../wxParser/index');

Page({
  onLoad: function () {
    wxParser.parse({
      bind: 'richText',
      html: `<div style="color: #f00;">hello, wxParser!</div>`,
      target: this,
      enablePreviewImage: false, // 禁用图片预览功能
      tapLink: (url) => { // 点击超链接时的回调函数
        // url 就是 HTML 富文本中 a 标签的 href 属性值
        // 这里可以自定义点击事件逻辑，比如页面跳转
        wx.navigateTo({
          url
        });
      }
    });

  }
})
```

**WXSS：在需要使用 wxparser 的页面的 wxss 文件中引入 wxParser 样式库，或者直接在根目录的 app.wxss 内引入**

```
@import '../../wxParser/index.wxss'
```

### 注意

---

- `JS` 中的 `richText` 可以自定义，但是必须要与 `WXML` 中的 `richText` 对应
- 推荐把 template 放到 `<view class="wxParser"></view>` 内部，这样可以受 `wxParser` 控制并具有 `wxParser` 的一些默认样式
- 不建议直接修改 `wxParser` 的默认样式（因为内容库样式会有定期更新），应该新增一个样式补丁文件用来自定义样式

*说明：该项目是基于 [wxparse](https://github.com/icindy/wxParse) 做的改造，主要用于把在 [知晓云](https://cloud.minapp.com/) 中的 [富文本编辑器](https://github.com/ifanrx/react-ueditor) 编辑的内容，展示到微信小程序上

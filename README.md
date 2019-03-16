## 简介

`A tiny, useful Chrome extension for getting website url and title of current tab to clipboard with format options.`

`一个获取浏览器当前选项卡网页标题、url并按格式输出到剪贴板的小巧实用的Chrome扩展`

######  注：本文档也是使用WebClip CRX剪贴url写成

## 使用技巧

- 快捷键支持：可以通过[扩展程序](chrome://extensions/shortcuts)给WebClip设置弹出的快捷键，从而使用快捷键快速剪贴URL；

---

###### 以下内容包括：已有功能实现情况，资料来源，尚未实现的功能设想

## Chrome插件动作

- 弹出页面：[Chrome插件开发 popup.html Click事件-CSDN论坛](https://bbs.csdn.net/topics/392028276)

## 获取网页信息

- url
- title
- favicon url

[javascript - Write text to Clipboard - Stack Overflow](https://stackoverflow.com/questions/13899299/write-text-to-clipboard)

[javascript - Copy to clipboard with jQuery/js in Chrome - Stack Overflow](https://stackoverflow.com/questions/23211018/copy-to-clipboard-with-jquery-js-in-chrome)

[官方文档](https://developer.chrome.com/apps/declare_permissions)


## 选择格式

- 单选按钮的默认选项
- 获取单选按钮的值 [jQuery操作单选按钮(radio)用法 - 天使不哭 - 博客园](https://www.cnblogs.com/hgmyz/p/6210976.html)
- 美化

## 快捷键支持

- 设置插件Popup的快捷键：[Change Chrome Extensions' Keyboard Shortcuts](https://browsernative.com/extensions/change-chrome-extensions-keyboard-shortcuts/)
- 设置默认回车：[怎么用JS把回车键设置到某个按钮下，也就是按回车相当于点了那个按钮_百度知道](https://zhidao.baidu.com/question/70825782.html)
- 单击按钮后关闭页面 [HTML页面中点击按钮关闭页面几种方式与取消 - 渴望飞的鱼的博客 - CSDN博客](https://blog.csdn.net/qq_36411874/article/details/79494372)

大浏览器：

> 浏览器下的快捷键使用技巧[How to Create Custom Keyboard Shortcuts For Extensions in Google Chrome](https://www.howtogeek.com/127162/how-to-create-custom-keyboard-shortcuts-for-browser-actions-and-extensions-in-google-chrome/)

> [【Anyshorcut】一款可以用快捷键打开你最常访问网站的Chrome插件 - 少数派](https://sspai.com/post/42272)

## favicon支持【暂不采用】

- favicon保存目录
- MD插入图片的格式: [(4条消息)Github README.md中插入并显示图片 - PGzxc的专栏 - CSDN博客](https://blog.csdn.net/calvin_zhou/article/details/79039153)

> \!\[Alt text](/path/to/img.jpg)

> 另一种是嵌入html标签 
	\<img src="图片路径" style="zoom:50%">

## websocket接口【暂不采用】

- 略

## 其他无关功能

- 删除百度搜索结果页面右侧的推荐栏

## PS

- 弹出一个不需要确定的提示窗口

	CSS
	[用CSS3美化单选框 radio 、多选框 checkbox 和 switch开关按钮-WEB前端开发](https://www.html.cn/archives/9274)
---

## Reference

素材：<img src="https://cdn-img.easyicon.net/favicon.ico"  width="11px"> [Bookmark Tag icons - Barker Icons - Easyicon](https://www.easyicon.net/1194046-Bookmark_tag_icon.html)


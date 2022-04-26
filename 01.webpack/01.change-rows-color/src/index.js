//1.使用Es6导入语法 导入jquery
import $ from 'jquery'

//导入样式(在webpack中,一切皆模块,都可以通过ES6导入语法进行导入和使用)
//如果某个模块中 使用from接受到的成员为undefined 则没必要接收
import './css/index.css'
import './css/index.less'

import './js/test/info'

//导入图片 得到图片文件
import logo from './images/logo.jpg'
//给img标签的src动态赋值
$('.box').attr('src', logo)

//2.定义jquery的入口函数
$(function() {
    //3.实现奇偶行的变色
    //奇数行
    $('li:odd').css('background-color', 'pink')

    //偶数行
    $('li:even').css('background-color', 'skyblue')
})

//定义装饰器函数
function info(target) {
    target.info = 'Person.info'
}

//定义一个普通的类
@info
class Person {}

console.log(Person.info);
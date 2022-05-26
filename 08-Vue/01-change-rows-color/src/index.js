// 1. 使用 ES6 导入 jQuery
import $ from 'jquery';
// 以模块形式，导入样式
import './css/index.css';
import './css/index.less';

// i1. 导入图片，得到图片
import pp from './imgs/pp.jpg';

// 给 img 标签的 src 动态赋值
$('.box').attr('src', pp);

// 2. 定义 jQuery 的入口函数
$(function () {
    // 3. 实现隔行变色
    $('li:odd').css('background-color', 'pink');
    $('li:even').css('background-color', 'blue');
});

// 定义装饰器函数
function info(target) { 
    target.info = 'Person===info';
}

// 定义普通的类
@info   // 装饰器
class Hello { 
}

console.log(Hello.info);
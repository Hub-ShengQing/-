// 1. 使用 ES6 导入 jQuery
import $ from 'jquery';
import './css/index.css';

// 2. 定义 jQuery 的入口函数
$(function () {
    // 3. 实现隔行变色
    $('li:odd').css('background-color', 'pink');
    $('li:even').css('background-color', 'blue');
});

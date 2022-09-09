function sendAjax(url) {
  return new Promise((reslove, reject) => {
    // 1. 创建对象
    const xhr = new XMLHttpRequest()

    // 2. 初始化 设置方法和 url
    xhr.open('GET', url)

    // 3. 发送
    xhr.send()

    // 4. 事件绑定 处理服务端返回的结果
    // readystate 是 xhr 对象的属性，表示状态 0 1 2 3 4
    xhr.onreadystatechange = function () {
      // 判断，当服务端所有结果返回
      if (xhr.readyState === 4) {
        // 判断响应状态码
        if (xhr.status >= 200 && xhr.status < 300) {
          reslove(xhr.response)
        } else {
          reject(xhr.status)
        }
      }
    }
  })
}

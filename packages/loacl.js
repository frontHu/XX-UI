//本地测试

import components from './components';

const install = function (Vue) {
  if (install.installed) return; // 判断是否安装
  console.log(install, 'install')
  console.log(components, 'components')
  components.map(component => Vue.component(component.name, component)); // 遍历注册全局组件
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install, // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  components  // 以下是具体的组件列表
}
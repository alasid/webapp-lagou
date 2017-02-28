# webapp-lagou


## 环境搭建

- 安装node环境 全局安装npm和bower
- 初始化一个仓库`git init` 
- 初始化配置文件  `npm init`  `bower init` (cmd环境)

## 安装工具包

- 安装  `angularjs`  `ui-router`
- 安装 `gulp-htmlmin/less/cssmin/concat/uglify/imagemin/clean/connect/load-plugins/open`
- 构建自动化工具 编写gulpfile 并创建文件夹 文件 测试

## 配置首页 main.html

- 包含 `head.html` `foot.html` `positionList.html`
- 在index.html中引入angular和ui-router框架
- 创建首页路由模块 配置
- stateProvider.state设置主页面 urlRouterProvider.otherwise默认跳转

- [ ] ##### 添加less文件及创建模板

- 创建 颜色变量.less 公用样式 
- 创建 头部模板.html 指令文件.js 样式.less
- 创建 底部模板.html 指令文件.js 样式.less

- [ ] ##### 配置底部路由

- 设置底部跳转 ui-sref="路由"
- 创建 职位列表模板.html 指令文件.js 样式.less
- mianController 设置list默认数据 绑定到列表
- 解决同名属性问题 在positionList.js 中添加scope:{data:'='} 暴露(data)接口 当前.html中使用data
- 调用时 在指令模板写上data="scope中的属性名" 即可实现重复调用 降低指令与控制器的耦合度指令复用

## 配置职位页面 position.html

- 包含 `headBar.html` `positionInfo.html` `company.html`
- 创建职位模板 路由 职位控制器
- 职位列表 添加事件 通过ui-sref="position({id:item.id})" 跳转到对应页面
- 创建公共head bar 模板 指令 样式 

## 配置公司页面 company.html

* 创建公司模板 路由 控制器companyControll.js
* 点击公司模块跳转 ui-sref="company{{id:1}}"
* 包含 `headBar.html` `positionInfo.html` `positionClass.html`
* 开发positionClass指令 创建positionClass样式文件并引入index.less

## 动态获取数据

* 从data.json中获取数据，动态添加到页面
* mainController 中注入$http 使用get方法获取 把响应的数据赋值给scope.list
* positionInfo职位详情中的收藏设置为登录后显示 未登录时投简历显示为去登录 ng-show="isLogin" positionInfo中isLogin: "=" 
* ng-bind="isLogin?'投个简历':'去登录'"
* 在positionController中注入$http 获取数据加载到页面

## 知识点

- [ ] 实现 默认选择第一项 点击切换

```
/*html*/

<button ng-click="showPositionList($index)" class="{{$index === isActive ? 'active' : ''}}" ng-repeat="item in com.positionClass"></button>

/*js*/

link: function($scope) {
  $scope.showPositionList = function(index) {
    $scope.positionList = $scope.com.positionClass[index].positionList;
    $scope.isActive = idx;
  }
  $scope.$watch('com',function(new) {
    if(new) {
      $scope.showPositionList(0);
    }
  })
}
```

- [ ] $scope自带方法

```
$broadcast() 父级向子级广播事件
用法 在父级作用域内定义一个事件
	$scope.$broadcast('abc',{id:1})
	在子级作用域内调用on函数接收
	事件名称 事件对象 数据
	$scope.on('abc',function(event,data){
      console.log(event,data);
	})
注意点 父级已经广播完毕而子级还未初始化（可以放在ajax请求中延迟广播）

$emit() 子级像父级冒泡事件
用法类似 注意发起与接收顺序

$digest() ng中使用原生js操作dom会导致双向数据绑定失效
解决：1杜绝在控制器中用原生js操作dom（使用scope对象/指令）
	 2双向绑定失效--调用$digest函数同步数据
```

- [ ] 定义公共的属性和方法

```
angular.module('app').run(['$rootScope',function($rootScope) {
  $rootScope.fn = function() {
    console.log(1);
  }
}])
```

- [ ] 服务(service)和服务工厂(factory)

```
angular.module('app').service('cache',['$cookies',function($cookies){
  this.put = function(key,value) {
    $cookies.put(key,value)
  };
  this.get = function(key) {
    $cookies.get(key);
  };
  this.remove = function(key) {
    $cookies.remove(key);
  };
  
}])

区别：
service返回函数，直接在this上声明
factory返回对象，可以声明私有属性

angular.module('app').factory('cache',['$cookies',function($cookies){
	var obj = {};
  return {
    put: function(key,value) {
      $cookies.put(key,value);
    }
  }
}])

```

## 搜索页面

* 在search.html
* 给input绑定数据模型ng-model="name"
* 搜索按钮 添加ng-click="search()"
* 取消按钮 添加ng-click="name='';search()"
* 在searchController中定义search函数并调用(函数中请求数据)

```
创建dict.js 定义dict全局变量缓存数据
angular.module('app').value('dict',{}).run(['dict','$http',function(dict,$http){
  $http.get('data/city.json',function(res) {
    dict.city = res;
  });
  $http.get('data/salary.json',function(res) {
    dict.salary = res;
  });
  $http.get('data/scale.json',function(res) {
    dict.scale = res;
  });
}])
1tab切换
给searchTab.html添加指令 动态获取数据
searchTab.js中 使用link 绑定对应逻辑
父级定义tabList 传入子级 子级遍历呈现tab数据
点击时传入当前对象ng-click(item) 把当前id赋值给定义的selectId
如果当前对象id等于点击的id 添加active样式 并通过tabClick通知父级

2sheet展示
父级获得当前点击对象后，通过tab-click(id,name)拿到对应列表数据
挂载到定义的sheet对象上--$scope.sheet.list=dict[id].data
$scope.sheet.visible=true
显示sheet列表，并通过list数据渲染

3获取点击的sheet元素
给sheet中的li绑定ng-click="select(item)" 然后通知父级当前对象被点击，父级通过select="sClick(id,name)" 获取当前对象属性

定义tabId 当tab被点击时更新id
在sClick(id,name)中通过遍历判断点击的tabId是否为当前id
是的话则替换name属性
如果没有id则还原属性
```

过滤器

```
1自定义过滤器函数
2在positionList.html中调用
ng-repeat="item in data|filterByObj:filterObj"
3在positionList.js中暴露filterObj接口
4在search.html中，给search-list 调用filter-obj="filterObj"
5在searchController中，初始化filterObj，并在sClick中调用
```
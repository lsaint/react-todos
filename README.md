
WORKFLOW
########

1. implemented with React
2. refactored with React-Redux
3. refactored with Redux-Saga
4. refactored with Umi + Dva


---
```
.
├── dist/                          // 默认的 build 输出目录
├── mock/                          // 本地模拟数据
├── config/
    ├── config.js                  // umi 配置，同 .umirc.js，二选一
└── src/                           // 源码目录
    ├── layouts/				           // 全局布局
    ├── utils/				             // 工具库
    ├── assets/                    // 本地静态资源
    ├── components/                // 业务通用组件                     
    ├── models/                		 // 全局 dva model
    ├── services/                  // 后台接口服务
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名，导出 react 组件
        ├── page1.test.js          // 用例文件，umi test 会匹配所有 .test.js 和 .e2e.js 结尾的文件
        └── page2/               	 // 页面 2，任意命名
            ├── index.js                  
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 全局JS, 可以在这里加入 polyfill
    ├── app.js                     // 运行时配置文件
├── .umirc.js                      // umi 配置，同 config/config.js，二选一
├── .env                           // 环境变量
├── .gitignore                           
├── package.json
└── README.md 
```

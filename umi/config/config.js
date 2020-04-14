// ref: https://umijs.org/config/
export default {
  antd: {},
  dva: { hmr: true },
  dynamicImport: {},
  pwa: false,
  lessLoader: { javascriptEnabled: true },
  title: 'umi',
  dll: false,

  // 所有需要在编译期用到的环境变量(.env中或命令行传入)需要在此定义
  define: {
    'process.env.API_URL': 'http://localhost:' + process.env.PORT,
    // 使用命令行传入>>> API_URL=http://localhost yarn start
    //'process.env.API_URL': process.env.API_URL,
  },
};

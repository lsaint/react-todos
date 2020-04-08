// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'umi',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  // 所有需要在编译期用到的环境变量(.env中或命令行传入)需要在此定义
  define: {
    'process.env.API_URL': 'http://localhost:' + process.env.PORT,
    // 使用命令行传入>>> API_URL=http://localhost yarn start
    //'process.env.API_URL': process.env.API_URL,
  },
};

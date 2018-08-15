const NODE_ENV = process.env.NODE_ENV || 'development';

const cdnUrl = {
  test: '',
  source: '',
  production: '//static01.jshuii.com/'
};

console.log('publicPath====', NODE_ENV);

module.exports = {
  // 手机还是PC
  isPhone: false,
  /** 运行环境 */
  env: NODE_ENV,
  /** 根路径全名 */
  basePath: __dirname,
  /** 源文件目录 */
  srcDir: 'src',
  /** 入口文件 */
  main: 'main',
  /** 打包输出路径 */
  outDir: 'dist',
  /** 公共路径 */
  publicPath: NODE_ENV === 'development' ? '/' : cdnUrl[process.env.USER_ENV],
  // publicPath: NODE_ENV === 'development' ? `http://${ip.address()}:8089/` : cdnUrl[process.env.USER_ENV],
  /** 是否sourcemap */
  sourcemaps: NODE_ENV === 'development',
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {},
  /** A hash map of variables and their values to expose globally */
  globals: {},
  /** Whether to enable verbose logging */
  verbose: false,
  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'react',
    'react-dom',
    'react-router',
  ],
};

# webpack实践——可视化资源分析与按需加载
> 学到很多东西的诀窍，就是一下子不要学很多。 ——洛 克
## 可视化资源分析[webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
**安装**

```
yarn add webpack-bundle-analyzer
```

**配置**
```
在config文件夹中找到webpack.config.js
//webpack打包分析工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports return中的plugins下添加：
new BundleAnalyzerPlugin(/*可修改参数*/)

//常用参数
analyzerPort: 在server模式下用于启动HTTP服务器的端口
openAnalyzer: 在默认浏览器中自动打开报告。
analyzerMode: 分析结果的展现方式
analyzerHost: 在server模式下用于启动HTTP服务器的主机
```
**效果**
![image-20210318163237618.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b2546162c81e4155a1240b8dd49d1363~tplv-k3u1fbpfcp-watermark.image)

## 按需加载[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
**安装**
```
yarn add babel-plugin-import
```
**配置**
```
//babel-loader配置中的options.plugins中添加
['import',{ libraryName:'antd' , style:true }],

即：
{
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),
                
                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                  ['import',{ libraryName:'antd' , style:true }],
                  isEnvDevelopment &&
                    shouldUseReactRefresh &&
                    require.resolve('react-refresh/babel'),
                ].filter(Boolean),
                cacheDirectory: true,
                cacheCompression: false,
                compact: isEnvProduction,
              },
            },
```
**效果**

![image-20210318165519041.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/003a707dc8e4472cb067ae33e59740b5~tplv-k3u1fbpfcp-watermark.image)

![image-20210318162900049.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a782e569488d4317b1b42c0ce27b3d96~tplv-k3u1fbpfcp-watermark.image)

## 注意
> react项目，"react": "^17.0.1",
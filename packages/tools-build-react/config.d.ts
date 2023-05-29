declare interface WebpackConfig {
  /** 应用入口文件，可以配置多入口 */
  entry: string;
  /** 资源输出路径 */
  distDir: string;

  resolve: {
    /** 扩展名 */
    extensions: string[];
    /** 别名设置 */
    alias: Record<string, string>;
  };

  loaders: any[];

  plugins: any[];

  devServer: Record<string, any>;
}

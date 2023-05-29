
interface WebpackConfig {
  entry: string;

  distDir: string;

  srcDir: string;

  loaders: any[];

  plugins: any[];

  [key: string]: any;
}

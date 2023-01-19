import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import nodeExternals from 'webpack-node-externals';
import NodemonPlugin from 'nodemon-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const devMode = process.env.devMode;
let plugins = [];
if (devMode === 'development'){
  plugins = [new NodemonPlugin()];
} else {
  plugins = [];
}

const config = {
  entry: './index.ts',
  mode: devMode,
  target: 'node',
  output: {
    filename: 'bundle.cjs',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js', '.webpack.js', '.web.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/, }, ],
    
  },
  externals: [nodeExternals()],
  plugins
};

export default config;


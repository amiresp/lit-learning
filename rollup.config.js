import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './app.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};
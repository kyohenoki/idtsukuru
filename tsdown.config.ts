import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/cmd.ts',
    platform: 'node',
    minify: true,
  },
  {
    entry: 'src/index.ts',
    platform: 'browser',
    dts: true,
    minify: true,
  },
])

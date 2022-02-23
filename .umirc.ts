import { defineConfig } from '@sl-theia/vis';

export default defineConfig({
  chainWebpack(config) {
    config.module
      .rule('file-loader')
      .test(/.otf$|.mp4$/)
      .use('file-loader')
      .loader('file-loader');
  },
});

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    // antd vue 按需加载插件
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ],
  ],
};

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#3e1ebd",
            "body-background": "#f7f8fa",

            // layout theme
            "layout-body-background": "#f7f8fa",
            "layout-header-padding": "0 40px",
            "layout-header-background": "#fff",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
};

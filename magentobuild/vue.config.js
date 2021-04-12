module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://gateway.marvel.com/v1/public",
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": "/",
        // },
      },
    },
  },
};

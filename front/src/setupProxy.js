const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/order",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    )
    app.use(
        "/check",
        createProxyMiddleware({
            target: "http://127.0.0.1:8080",
            changeOrigin: true,
        })
    )
    app.use(
        "/ordermanage",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    )
}
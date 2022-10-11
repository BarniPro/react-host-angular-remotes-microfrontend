const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "auto",
        uniqueName: "angular_remote_2",
        scriptType: "text/javascript"
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: false,
    },
    experiments: {
        topLevelAwait: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "angular_remote_2",
            library: { type: "var", name: "angular_remote_2" },
            filename: "angular_remote_2.js",
            exposes: {
                './angularRemote2': './src/loadAngularRemote2.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
    ],
};
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    output: {
        publicPath: "auto",
        uniqueName: "angular_remote_1",
        scriptType: "text/javascript"
    },
    optimization: {
        runtimeChunk: false
    },
    experiments: {
        outputModule: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "angular_remote_1",
            library: { type: "var", name: "angular_remote_1" },
            filename: "angular_remote_1.js",
            exposes: {
                './angularRemote1': './src/loadAngularRemote1.ts',
            },
            shared: ["@angular/core", "@angular/common", "@angular/router"]
        })
    ],
};
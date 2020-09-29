module.exports = (api, options, rootOptions) => {
    api.extendPackage({
        "scripts": {
            "serve": "yarn serve:dev",
            "build": "yarn build:prod",
            "lint": "vue-cli-service --fix lint",
            "test:unit": "vue-cli-service test:unit",
            "serve:dev": "vue-cli-service serve --mode dev.serve",
            "serve:prod": "vue-cli-service serve --mode prod.serve",
            "build:dev": "vue-cli-service build --mode dev.build",
            "build:prod": "vue-cli-service build --mode prod.build",
            "build:analyze": "vue-cli-service build --mode analyze",
            "dll": "webpack -p --progress --config ./webpack.dll.conf.js",
            "serve:dist": "http-server -p 9090 dist/"
        }
    })
    api.extendPackage({   
            "dependencies": {
                "@babel/runtime": "^7.11.2",
                "axios": "^0.18.0",
                "vue": "^2.6.11",
                "vue-router": "^3.2.0",
                "vuex": "^3.4.0",
                "vuex-persistedstate": "^2.5.4"
            },
            "devDependencies": {
                "@vue/cli-plugin-babel": "~4.5.0",
                "@vue/cli-plugin-eslint": "~4.5.0",
                "@vue/cli-plugin-router": "~4.5.0",
                "@vue/cli-plugin-vuex": "~4.5.0",
                "@vue/cli-service": "~4.5.0",
                "@vue/eslint-config-standard": "^5.1.2",
                "babel-eslint": "^10.1.0",
                "eslint": "^6.7.2",
                "eslint-plugin-import": "^2.20.2",
                "eslint-plugin-node": "^11.1.0",
                "eslint-plugin-promise": "^4.2.1",
                "eslint-plugin-standard": "^4.0.0",
                "eslint-plugin-vue": "^6.2.2",
                "sass": "^1.26.5",
                "sass-loader": "^8.0.2",
                "vue-template-compiler": "^2.6.11",
                "webpack-bundle-analyzer": "^3.8.0",
                "terser-webpack-plugin": "^1.4.1",
                "uglifyjs-webpack-plugin": "^2.2.0",
                "lodash": "^4.17.15",
                "lodash-webpack-plugin": "^0.11.5",
                "@babel/plugin-transform-runtime": "^7.11.0",
                "add-asset-html-webpack-plugin": "^3.1.3",
                "compression-webpack-plugin": "^4.0.0"
         }
    })
    if(options.application=== 'pc') {
        api.extendPackage({
            dependencies: {
                "amfe-flexible": "^2.2.1",
                "vant": "^2.0.9"
            },
            devDependencies: {
                "postcss-pxtorem": "^4.0.1",
            }
        })

    }else {
        api.extendPackage({
            dependencies: {
              'element-ui': '^2.8.2'
            }
          });
    }
    api.render('./template')
}
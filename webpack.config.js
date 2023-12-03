const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {

	const {
		production
	} = env;
	const minSfx = production ? '.min' : '';

	return [{
		mode:production ? 'production' : 'development',
		watch:!production,
		entry:{
			'editor':'./src/index.js',
			'projects':'./src/projects.js',
			'templates':'./src/templates.js',
			'free-images':'./src/free-images.js',
			'fonts':'./src/fonts.js',
			'settings':'./src/settings.js'
		},
		output:{
			filename:`[name].build${minSfx}.js`,
			path:path.resolve(__dirname, 'assets/js'),
			library:'pixmagixEditor'
		},
		externals:{
			'react':'React',
			'react-dom':'ReactDOM',
			'fabric':'fabric',
			'lodash':'lodash',
			'elements':'pixmagixElements',
			'editor-globals':'pixmagixGlobals',
			'wp-i18n':'wp.i18n',
			'wp-api-fetch':'wp.apiFetch',
			'wp-hooks':'wp.hooks'
		},
		devtool:false,
		module:{
			rules:[{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env', '@babel/preset-react']
					}
				}
			}]
		}
	},{
		mode:production ? 'production' : 'development',
		watch:!production,
		entry:{
			'elements':'./src/elements.js'
		},
		output:{
			filename:`[name].build${minSfx}.js`,
			path:path.resolve(__dirname, 'assets/js'),
			library:'pixmagixElements'
		},
		externals:{
			'react':'React',
			'react-dom':'ReactDOM',
			'lodash':'lodash',
			'wp-i18n':'wp.i18n'
		},
		devtool:false,
		module:{
			rules:[{
				test:/\.jsx?$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env', '@babel/preset-react']
					}
				}
			}]
		}
	},{
		mode:production ? 'production' : 'development',
		watch:!production,
		entry:{
			'editor':'./src/style.scss',
			'projects':'./src/projects.scss',
			'templates':'./src/templates.scss',
			'free-images':'./src/free-images.scss',
			'fonts':'./src/fonts.scss',
			'settings':'./src/settings.scss'
		},
		output:{
			filename:`[name].build${minSfx}.js`,
			path:path.resolve(__dirname, 'assets/css')
		},
		devtool:false,
		module:{
			rules:[{
				test:/\.scss$/,
				exclude:/node_modules/,
				use:[
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}]
		},
		plugins:[
			new MiniCssExtractPlugin({
				filename:`[name].build${minSfx}.css`
			})
		]
	}];

};

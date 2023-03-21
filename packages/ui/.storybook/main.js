module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		'@storybook/addon-storysource',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	// The fix
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.mjs$/,
			include: /node_modules/,
			type: "javascript/auto",
		});
		return config;
	}
};

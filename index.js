exports.decorateConfig = config => {
	return Object.assign({}, config, {
		borderColor: config.borderColor || 'tomato',
		cursorColor: config.cursorColor || 'tomato',
		backgroundColor: config.backgroundColor || '#252120',
		foregroundColor: 'whitesmoke',
		selectionColor: 'rgba(245, 245, 245, 0.3)', // transparent smokewhite
		colors: {
			black: 'black',
			red: 'tomato',
			green: 'mediumseagreen',
			yellow: 'gold',
			blue: 'steelblue',
			magenta: 'mediumvioletred',
			cyan: 'mediumturquoise',
			white: 'whitesmoke',
			lightBlack: 'dimgray',
			lightRed: 'salmon',
			lightGreen: 'mediumspringgreen',
			lightYellow: 'khaki',
			lightBlue: 'lightskyblue',
			lightMagenta: 'hotpink',
			lightCyan: 'cyan',
			lightWhite: 'white',
		},
	});
};

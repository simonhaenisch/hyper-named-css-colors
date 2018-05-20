exports.decorateConfig = config => {
	return Object.assign({}, config, {
		borderColor: config.borderColor || 'tomato',
		cursorColor: config.cursorColor || 'tomato',
		backgroundColor: config.backgroundColor || '#252120',
		foregroundColor: 'whitesmoke',
		selectionColor: 'rgba(105, 105, 105, 0.5)', // #69696980
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

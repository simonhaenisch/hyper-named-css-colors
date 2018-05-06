const test = require('tape');
const { decorateConfig } = require('./index');

test('default config has correct border and cursor color', t => {
	const config = decorateConfig({});

	t.plan(2);
	t.equal(config.borderColor, 'tomato');
	t.equal(config.cursorColor, 'tomato');
});

test('user config can overwrite border and cursor color', t => {
	const config = decorateConfig({
		borderColor: '#123',
		cursorColor: '#123',
	});

	t.plan(2);
	t.equal(config.borderColor, '#123');
	t.equal(config.cursorColor, '#123');
});

export {}
const View = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/view.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('View', () => {
	it('test for View', async () => {
		const _arrayValuer8ukTdP = null;
		const _nameUgXEFnv = [_arrayValuer8ukTdP]
		const _optionsEq7AdRL = true;
		const _ViewohKB0v3 = new View(_nameUgXEFnv, _optionsEq7AdRL)
		const _optionsxkdCwUp = 5.305214980089774;
		const _returnValueBXft5dE = undefined;
		const _callbackVmfOEk = () => { return _returnValueBXft5dE };
		const _returnValue0TQcrV = await _ViewohKB0v3.render(_optionsxkdCwUp, _callbackVmfOEk)
	});

	it('test for View', async () => {
		const _nameoZq7HH = "PPtum";
		const _optionsnXbZCB = false;
		const _ViewIMjWWdt = new View(_nameoZq7HH, _optionsnXbZCB)
		const _optionsgcyP7Sw = -5.848838783262207;
		const _arrayValuePJuWgcw = {
		
	}
		const _arrayValuegi0VGtS = -0.30700454248905906;
		const _arrayValuekwzkXfG = undefined;
		const _returnValueAJJdezx = [_arrayValuegi0VGtS, _arrayValuekwzkXfG]
		const _arrayValuexcj3zwZ = () => { return _returnValueAJJdezx };
		const _arrayValuevwtKB5N = [_arrayValuexcj3zwZ]
		const _callbackbb5VWqP = [_arrayValuePJuWgcw, _arrayValuevwtKB5N]
		const _returnValue7vf6wI = await _ViewIMjWWdt.render(_optionsgcyP7Sw, _callbackbb5VWqP)
		const _nameAYK6ViR = false;
		const _returnValuefnmjEQ4 = await _ViewIMjWWdt.lookup(_nameAYK6ViR)
		const _returnValuec8KUWhs = null;
		const _dirX54Y5Xb = () => { return _returnValuec8KUWhs };
		const _fileMLNQ022 = true;
		const _returnValueLl762EH = await _ViewIMjWWdt.resolve(_dirX54Y5Xb, _fileMLNQ022)
	});
})
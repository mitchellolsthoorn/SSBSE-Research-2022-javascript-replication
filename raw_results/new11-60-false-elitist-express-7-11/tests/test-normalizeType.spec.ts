export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _arrayValueA1gsDYA = undefined;
		const _arrayValueWsC2TGQ = undefined;
		const _arrayValueW5JZCWI = "Op2RuhGEJFx5fGljMSwvq02yt0Vwj36N6PB1OiOUJsIAj9G2hYMNmckJBG";
		const _returnValueTMeN4O = null;
		const _arrayValueHWvYfp6 = () => { return _returnValueTMeN4O };
		const _arrayValuex6dlcpy = [_arrayValueHWvYfp6]
		const _arrayValuepVZBdUi = null;
		const _arrayValueFGNeROe = 3.097291190506157;
		const _arrayValueKLTSm5n = 9.222268648391484;
		const _arrayValueh6hg0QW = [_arrayValuepVZBdUi, _arrayValueFGNeROe, _arrayValueKLTSm5n]
		const _arrayValuelNbLvuO = "9IyuQ7";
		const _arrayValuehuhAw8g = null;
		const _arrayValueybwyB3G = [_arrayValuex6dlcpy, _arrayValueh6hg0QW, _arrayValuelNbLvuO, _arrayValuehuhAw8g]
		const _indexOfGNa0u73 = [_arrayValueA1gsDYA, _arrayValueWsC2TGQ, _arrayValueW5JZCWI, _arrayValueybwyB3G]
		const _typeIGZcrZr = {
			"indexOf": _indexOfGNa0u73
	}
		const _returnValueuosCTER = await normalizeType(_typeIGZcrZr)
	});

	it('test for normalizeType', async () => {
		const _returnValueOBiYvJo = true;
		const _indexOfZq6vKu = () => { return _returnValueOBiYvJo };
		const _typexCVHtj7 = {
			"indexOf": _indexOfZq6vKu
	}
		const _returnValueyoYfaWU = await normalizeType(_typexCVHtj7)
	});

	it('test for normalizeType', async () => {
		const _arrayValueN6WQUAB = false;
		const _arrayValuehZgs4T = null;
		const _typeylqJfq6 = [_arrayValueN6WQUAB, _arrayValuehZgs4T]
		const _returnValueU5wyor = await normalizeType(_typeylqJfq6)
	});
})
export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _typeYZLCCMk = false;
		const _returnValuek3G3QVg = await normalizeType(_typeYZLCCMk)
	});

	it('test for normalizeType', async () => {
		const _arrayValuexiBnlFO = true;
		const _arrayValuekWQatVC = null;
		const _arrayValuer7pKdO = undefined;
		const _arrayValuefhmeu0b = "G4unjR9V9HLKP9NKmqdO52GCsULT4dSIMV15P1vvriNTtuOs8gP6vrwTdzX8XASwahSbKsCoi";
		const _arrayValuesoq2YaB = [_arrayValuefhmeu0b]
		const _typemPuQdji = [_arrayValuexiBnlFO, _arrayValuekWQatVC, _arrayValuer7pKdO, _arrayValuesoq2YaB]
		const _returnValueFjVs3h = await normalizeType(_typemPuQdji)
	});
})
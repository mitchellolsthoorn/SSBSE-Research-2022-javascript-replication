export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueACv9wCY = 6.1072148880530115;
		const _indexOfSda4zPi = () => { return _returnValueACv9wCY };
		const _typeq5yyaVm = {
			"indexOf": _indexOfSda4zPi
	}
		const _returnValuelQ8nvLH = await normalizeType(_typeq5yyaVm)
	});

	it('test for normalizeType', async () => {
		const _typemV2nM57 = "UIgt5Kd0i7GolbMLQvYfRfHdqPeHasvD5nrPsRXTTB2Eq6I70JZPxH5hUiyd4Ly2HR2He";
		const _returnValueePumZNw = await normalizeType(_typemV2nM57)
	});
})
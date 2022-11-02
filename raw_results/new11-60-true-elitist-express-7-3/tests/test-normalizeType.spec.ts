export {}
const {normalizeType} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('normalizeType', () => {
	it('test for normalizeType', async () => {
		const _returnValueXIIomUs = true;
		const _indexOfYtNU64j = () => { return _returnValueXIIomUs };
		const _typelJQRU4Y = {
			"indexOf": _indexOfYtNU64j
	}
		const _returnValuexrTRz5Y = await normalizeType(_typelJQRU4Y)
	});

	it('test for normalizeType', async () => {
		const _arrayValueaXTanCQ = false;
		const _arrayValueSfERPnf = 2.921498416430513;
		const _arrayValueKlzRRJ = [_arrayValueSfERPnf]
		const _arrayValueX5wUaid = null;
		const _arrayValueKcyVyrG = false;
		const _arrayValuer8OFrN4 = undefined;
		const _arrayValueVozb8H3 = 7.302705618669879;
		const _arrayValuen1T9ECM = -9.019394901343238;
		const _arrayValued4UeFwA = [_arrayValueKcyVyrG, _arrayValuer8OFrN4, _arrayValueVozb8H3, _arrayValuen1T9ECM]
		const _typecxBjjmO = [_arrayValueaXTanCQ, _arrayValueKlzRRJ, _arrayValueX5wUaid, _arrayValued4UeFwA]
		const _returnValueamzTGmp = await normalizeType(_typecxBjjmO)
	});
})
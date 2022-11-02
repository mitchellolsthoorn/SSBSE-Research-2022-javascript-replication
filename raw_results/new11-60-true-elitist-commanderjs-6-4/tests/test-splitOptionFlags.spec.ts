export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueapLXXI = 6.056529213292485;
		const _splitrUvTfU = () => { return _returnValueapLXXI };
		const _flagsSKoyQOs = {
			"split": _splitrUvTfU
	}
		const _returnValueGfbVggS = await splitOptionFlags(_flagsSKoyQOs)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueR3dTKoY = 2.9998488997670485;
		const _returnValuerpofGkI = true;
		const _arrayValued8MnhcR = () => { return _returnValuerpofGkI };
		const _returnValuetjqj44 = [_arrayValueR3dTKoY, _arrayValued8MnhcR]
		const _splitcF1kS7D = () => { return _returnValuetjqj44 };
		const _flagsW1x4mkh = {
			"split": _splitcF1kS7D
	}
		const _returnValuewKO0LIA = await splitOptionFlags(_flagsW1x4mkh)
	});
})
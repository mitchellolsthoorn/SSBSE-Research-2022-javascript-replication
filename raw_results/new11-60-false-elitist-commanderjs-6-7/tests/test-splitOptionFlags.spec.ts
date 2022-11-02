export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueAOIDaN8 = -4.9396750206431275;
		const _splitVTYTPV2 = () => { return _returnValueAOIDaN8 };
		const _flagshmrROeO = {
			"split": _splitVTYTPV2
	}
		const _returnValueuVEEF3T = await splitOptionFlags(_flagshmrROeO)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuehzjg2Uy = false;
		const _returnValueXPJiX6j = -4.130344130996435;
		const _arrayValueIcsNo0X = () => { return _returnValueXPJiX6j };
		const _arrayValuecXCbaEq = true;
		const _returnValueHtlvTWK = [_arrayValuehzjg2Uy, _arrayValueIcsNo0X, _arrayValuecXCbaEq]
		const _splitX3oGSKe = () => { return _returnValueHtlvTWK };
		const _flagsYITzqan = {
			"split": _splitX3oGSKe
	}
		const _returnValueFvKW43C = await splitOptionFlags(_flagsYITzqan)
	});
})
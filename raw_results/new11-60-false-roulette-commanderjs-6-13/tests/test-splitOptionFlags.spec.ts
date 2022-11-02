export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _arrayValuePQQR35m = 6.043777228894442;
		const _flagsWLQG6eW = [_arrayValuePQQR35m]
		const _returnValuehejwPQj = await splitOptionFlags(_flagsWLQG6eW)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsobK2Kvd = "YAq2e9stdLg2bKUCZ2FXq";
		const _returnValuezYOtKei = await splitOptionFlags(_flagsobK2Kvd)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueTWKbFH8 = undefined;
		const _arrayValueZZg2PS = true;
		const _arrayValueZhKaemh = [_arrayValueTWKbFH8, _arrayValueZZg2PS]
		const _arrayValueioyIF5Y = true;
		const _returnValuekUMZ2zp = [_arrayValueZhKaemh, _arrayValueioyIF5Y]
		const _splitxa45U81 = () => { return _returnValuekUMZ2zp };
		const _flagsb2J33W = {
			"split": _splitxa45U81
	}
		const _returnValuePfIvo0H = await splitOptionFlags(_flagsb2J33W)
	});
})
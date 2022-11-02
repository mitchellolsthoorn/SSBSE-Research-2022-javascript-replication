export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValuenGDWRgI = false;
		const _splitg8Fkfto = () => { return _returnValuenGDWRgI };
		const _flagsc9szusW = {
			"split": _splitg8Fkfto
	}
		const _returnValuehQR8MRs = await splitOptionFlags(_flagsc9szusW)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueQsymRD = "QMOqCYgdez78at4cgJRDpOO3D3yB";
		const _split2Bdpaj = () => { return _returnValueQsymRD };
		const _flagsEZQnd8D = {
			"split": _split2Bdpaj
	}
		const _returnValueUuv5Zhp = await splitOptionFlags(_flagsEZQnd8D)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueHfsXV2c = "BudJfu6Dp";
		const _arrayValueZSuEE9 = () => { return _returnValueHfsXV2c };
		const _returnValuethjWkB = [_arrayValueZSuEE9]
		const _splitxlrLhF3 = () => { return _returnValuethjWkB };
		const _flagsZZp9nb5 = {
			"split": _splitxlrLhF3
	}
		const _returnValuep8xACb = await splitOptionFlags(_flagsZZp9nb5)
	});
})
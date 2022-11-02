export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueaVf5Mpr = undefined;
		const _splitDExVgU = () => { return _returnValueaVf5Mpr };
		const _flagsopu4Xcr = {
			"split": _splitDExVgU
	}
		const _returnValueHLhFQdd = await splitOptionFlags(_flagsopu4Xcr)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsBNOlnz = "v8cI6o1rL6";
		const _returnValuePt935eR = await splitOptionFlags(_flagsBNOlnz)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueDGePruB = "CYw2uwRwawOKHlQ4KlH8tRslnVd76eHHokb79bpsgRq";
		const _splittqiF1W = () => { return _returnValueDGePruB };
		const _flagsW54ehI8 = {
			"split": _splittqiF1W
	}
		const _returnValueKkllWuD = await splitOptionFlags(_flagsW54ehI8)
	});
})
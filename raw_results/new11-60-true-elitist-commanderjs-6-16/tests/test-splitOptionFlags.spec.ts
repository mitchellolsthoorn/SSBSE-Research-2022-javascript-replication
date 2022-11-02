export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueKHDGoa5 = true;
		const _splitb2URzc3 = () => { return _returnValueKHDGoa5 };
		const _flagsPKJrHna = {
			"split": _splitb2URzc3
	}
		const _returnValuegWm8pB8 = await splitOptionFlags(_flagsPKJrHna)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValuetjK0fKC = "7DFxMD4h4ApFmKf12Ljk7evbAdPPOgtfXBMoP4VmDO22aHHNKhBxt4VgHV1eCHA7PyBz";
		const _splitmor3TmU = () => { return _returnValuetjK0fKC };
		const _flagsKkMl0W1 = {
			"split": _splitmor3TmU
	}
		const _returnValuewcf7g26 = await splitOptionFlags(_flagsKkMl0W1)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueZaMjVYR = {
		
	}
		const _returnValueSvMLmVa = [_arrayValueZaMjVYR]
		const _splitf2Paxpg = () => { return _returnValueSvMLmVa };
		const _flagsHyH7Rt = {
			"split": _splitf2Paxpg
	}
		const _returnValueoQLhh0 = await splitOptionFlags(_flagsHyH7Rt)
	});
})
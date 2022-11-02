export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueCVX3wCO = "lT5wbi2B9g9RwiH99590wciVMnLLcDsbTsaXzARW9SNB7WrXP76WoRjiAWTOs9oDQft00SuuCMqQ757f8BhpXdA2";
		const _splitsXLBAGU = () => { return _returnValueCVX3wCO };
		const _flagsqkdIL25 = {
			"split": _splitsXLBAGU
	}
		const _returnValuehMnFnYr = await splitOptionFlags(_flagsqkdIL25)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueMWYFCBH = false;
		const _splits3G5T0L = () => { return _returnValueMWYFCBH };
		const _flagswzd2xLj = {
			"split": _splits3G5T0L
	}
		const _returnValueYcfCxKG = await splitOptionFlags(_flagswzd2xLj)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsgVw1AUN = "PGOOnkul4aJPHekfSuF7Lr7tVEUlr0e2HujsvV80tTBf2ksF2MGLTOwVoOv1kqSEqlh5tuhLyQxDOig";
		const _returnValueWpdei5a = await splitOptionFlags(_flagsgVw1AUN)
	});
})
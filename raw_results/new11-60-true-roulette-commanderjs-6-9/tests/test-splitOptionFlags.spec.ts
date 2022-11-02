export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsukKLwcR = "v40IaVC";
		const _returnValueXHj8AE = await splitOptionFlags(_flagsukKLwcR)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueKtSm8W = "VD3Pr59HlpofO6Y2HNy2HwRa3FdO";
		const _splitXY3ZZnO = () => { return _returnValueKtSm8W };
		const _flagsVOWDf6b = {
			"split": _splitXY3ZZnO
	}
		const _returnValuePOQ195C = await splitOptionFlags(_flagsVOWDf6b)
	});
})
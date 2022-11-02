export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValues0AdiM0 = true;
		const _splitVjpDE2K = () => { return _returnValues0AdiM0 };
		const _flagsiG1gXD = {
			"split": _splitVjpDE2K
	}
		const _returnValueHor6BoE = await splitOptionFlags(_flagsiG1gXD)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValuetlz7L4G = false;
		const _arrayValuewLu6NJ = {
		
	}
		const _returnValueUmXzM9h = [_arrayValuetlz7L4G, _arrayValuewLu6NJ]
		const _splitL3Ly4Cm = () => { return _returnValueUmXzM9h };
		const _flagsNG4hYU6 = {
			"split": _splitL3Ly4Cm
	}
		const _returnValueze73EuR = await splitOptionFlags(_flagsNG4hYU6)
	});
})
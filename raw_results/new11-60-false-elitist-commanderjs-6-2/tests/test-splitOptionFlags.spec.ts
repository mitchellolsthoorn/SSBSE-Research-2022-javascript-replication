export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _returnValueOxB0rtR = 0.8910932141757417;
		const _splitwbxCwUs = () => { return _returnValueOxB0rtR };
		const _flagsF0Ag4bd = {
			"split": _splitwbxCwUs
	}
		const _returnValueiO75Ix = await splitOptionFlags(_flagsF0Ag4bd)
	});

	it('test for splitOptionFlags', async () => {
		const _arrayValueaKaykBw = "ETBspyuqxjGC4nH73aeabQ6bDZzPKUAWUkHYNda1jWdppDrkmeJSiMgDVt8";
		const _arrayValue5m9oI5 = "PfRlBlAxi9oxgQSvCWyfCZD";
		const _returnValuegy3UjzW = [_arrayValueaKaykBw, _arrayValue5m9oI5]
		const _splitFprtdJz = () => { return _returnValuegy3UjzW };
		const _flagsfoJSDPq = {
			"split": _splitFprtdJz
	}
		const _returnValueNwz0EFh = await splitOptionFlags(_flagsfoJSDPq)
	});
})
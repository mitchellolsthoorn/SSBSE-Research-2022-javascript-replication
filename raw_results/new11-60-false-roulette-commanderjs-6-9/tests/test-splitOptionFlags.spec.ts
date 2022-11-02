export {}
const {splitOptionFlags} = require("../../.syntest/instrumented/benchmark/top10npm/commanderjs/lib/option.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('splitOptionFlags', () => {
	it('test for splitOptionFlags', async () => {
		const _flagsNoGsjMn = -4.925145182756908;
		const _returnValueAmWmLoH = await splitOptionFlags(_flagsNoGsjMn)
	});

	it('test for splitOptionFlags', async () => {
		const _flagsrnzC8KQ = "6NsEoy51R93LNcWx1nRyMcjlsF4O1oZAv";
		const _returnValueidtBUVm = await splitOptionFlags(_flagsrnzC8KQ)
	});

	it('test for splitOptionFlags', async () => {
		const _returnValueqxUvhOj = "JXE1Jq2aUMu9IVBrzQm8O6FErsIMZ7vrCvY02FIrXlyRtXSorbCT7Dwm5m1J09eDgyxUnUeV";
		const _splityPwLcy = () => { return _returnValueqxUvhOj };
		const _flagsq3fWVy = {
			"split": _splityPwLcy
	}
		const _returnValueMsQJxbt = await splitOptionFlags(_flagsq3fWVy)
	});
})
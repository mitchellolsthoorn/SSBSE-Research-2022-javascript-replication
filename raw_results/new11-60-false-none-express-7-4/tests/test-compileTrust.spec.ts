export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valE9nm2gJ = false;
		const _returnValueiJGv3ld = await compileTrust(_valE9nm2gJ)
	});

	it('test for compileTrust', async () => {
		const _valPRLSkaa = 5.9375437589894275;
		const _returnValuelYgDsHD = await compileTrust(_valPRLSkaa)
	});

	it('test for compileTrust', async () => {
		const _valN5Cuy8i = "c6ZfAwWypR16n15w0xtNokzcu8I9knPwEXTf4GSqxTpodvE3aj7RmS68dtePrkQwB8ogcK7yRPmddg";
		const _returnValuetbmvhnq = await compileTrust(_valN5Cuy8i)
	});

	it('test for compileTrust', async () => {
		const _returnValueRoQfmok = null;
		const _valdC6e1m8 = () => { return _returnValueRoQfmok };
		const _returnValueQke6YTD = await compileTrust(_valdC6e1m8)
	});

	it('test for compileTrust', async () => {
		const _valWF3H27M = true;
		const _returnValueTURcGtT = await compileTrust(_valWF3H27M)
	});
})
export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valc2g7TCe = "mskVjL1tzt";
		const _returnValuenmsBiOU = await compileTrust(_valc2g7TCe)
	});

	it('test for compileTrust', async () => {
		const _valSlESBRC = -3.512036616887957;
		const _returnValueLkduAbW = await compileTrust(_valSlESBRC)
	});

	it('test for compileTrust', async () => {
		const _arrayValuehzFlWNZ = undefined;
		const _arrayValueVPUgcT = -6.029125666887056;
		const _arrayValueLKUwrk2 = 0.46696876649051333;
		const _valVezv3Yg = [_arrayValuehzFlWNZ, _arrayValueVPUgcT, _arrayValueLKUwrk2]
		const _returnValuexbszinu = await compileTrust(_valVezv3Yg)
	});

	it('test for compileTrust', async () => {
		const _valEr0BBCZ = true;
		const _returnValueoeErooy = await compileTrust(_valEr0BBCZ)
	});

	it('test for compileTrust', async () => {
		const _arrayValuef6VTzq = {
		
	}
		const _returnValueDdba7MF = null;
		const _arrayValuetC9rXa = () => { return _returnValueDdba7MF };
		const _returnValueVWhSRub = [_arrayValuetC9rXa]
		const _returnValueYXxq3lK = () => { return _returnValueVWhSRub };
		const _arrayValueBvApRGQ = () => { return _returnValueYXxq3lK };
		const _returnValuePYeQDLz = [_arrayValuef6VTzq, _arrayValueBvApRGQ]
		const _valXwJ6F7 = () => { return _returnValuePYeQDLz };
		const _returnValue5U0Bax = await compileTrust(_valXwJ6F7)
	});
})
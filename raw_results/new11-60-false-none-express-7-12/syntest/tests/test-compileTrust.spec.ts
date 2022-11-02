export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValueMM1aik1 = null;
		const _valwwcr0H0 = [_arrayValueMM1aik1]
		const _returnValuenvFJfmy = await compileTrust(_valwwcr0H0)
	});

	it('test for compileTrust', async () => {
		const _valKVBxUt = "OeU673JNzVPjeeg7pGPo7gn2YNlGgHAaV";
		const _returnValueBZhlYhX = await compileTrust(_valKVBxUt)
	});

	it('test for compileTrust', async () => {
		const _valgqciAR9 = 9.362291695300865;
		const _returnValuegWpGkC = await compileTrust(_valgqciAR9)
	});

	it('test for compileTrust', async () => {
		const _returnValueecMTtVQ = null;
		const _valNhS7SO8 = () => { return _returnValueecMTtVQ };
		const _returnValueqkr2FTx = await compileTrust(_valNhS7SO8)
	});

	it('test for compileTrust', async () => {
		const _valX3CENIu = true;
		const _returnValueQ3ayhZ8 = await compileTrust(_valX3CENIu)
	});
})
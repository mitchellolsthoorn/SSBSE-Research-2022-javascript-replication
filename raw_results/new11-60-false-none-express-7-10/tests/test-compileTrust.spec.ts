export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valce2oa9C = "1KbHxKkFzLLzGTGo3GJfhn2KA9cX88jUrvkZ3G2jLGbdwRQqq2ulSPLl3GuDkyq29VdylL2";
		const _returnValueMAhUc2q = await compileTrust(_valce2oa9C)
	});

	it('test for compileTrust', async () => {
		const _valONQ8dvk = false;
		const _returnValueh0NHZ2b = await compileTrust(_valONQ8dvk)
	});

	it('test for compileTrust', async () => {
		const _valJjFrmbJ = -6.235108210877949;
		const _returnValuejdoXwdj = await compileTrust(_valJjFrmbJ)
	});

	it('test for compileTrust', async () => {
		const _returnValueILCvVI = null;
		const _val04cCXz = () => { return _returnValueILCvVI };
		const _returnValuen6XY6SD = await compileTrust(_val04cCXz)
	});

	it('test for compileTrust', async () => {
		const _val6vbbkY = true;
		const _returnValueRWjaCjO = await compileTrust(_val6vbbkY)
	});
})
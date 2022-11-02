export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valRFsIzAL = undefined;
		const _returnValueDiqOTUN = await compileTrust(_valRFsIzAL)
	});

	it('test for compileTrust', async () => {
		const _valJOInzkG = 7.063149371832971;
		const _returnValueWUyzlY = await compileTrust(_valJOInzkG)
	});

	it('test for compileTrust', async () => {
		const _valp4XLI6K = "cQvBwcMsP88HvuEuc0wjxVYCGk";
		const _returnValueXLzS3C = await compileTrust(_valp4XLI6K)
	});

	it('test for compileTrust', async () => {
		const _valBQw2Bma = true;
		const _returnValueXfAkS1k = await compileTrust(_valBQw2Bma)
	});

	it('test for compileTrust', async () => {
		const _returnValuepiJhKD2 = null;
		const _valKYWIK81 = () => { return _returnValuepiJhKD2 };
		const _returnValuezAoXr9p = await compileTrust(_valKYWIK81)
	});
})
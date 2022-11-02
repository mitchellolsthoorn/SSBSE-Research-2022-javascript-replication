export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValuejWxYiTn = {
		
	}
		const _returnValueZJuLSm4 = -1.214191794844556;
		const _arrayValuePA4XNhR = () => { return _returnValueZJuLSm4 };
		const _arrayValuekGS9kik = null;
		const _valWTE2z5 = [_arrayValuejWxYiTn, _arrayValuePA4XNhR, _arrayValuekGS9kik]
		const _returnValuemUIH7cd = await compileTrust(_valWTE2z5)
	});

	it('test for compileTrust', async () => {
		const _valC2yCrxn = true;
		const _returnValueUz9eZPY = await compileTrust(_valC2yCrxn)
	});

	it('test for compileTrust', async () => {
		const _valxo7Yf2F = 1.8264108117113764;
		const _returnValueL4ipj3X = await compileTrust(_valxo7Yf2F)
	});

	it('test for compileTrust', async () => {
		const _valCe8Tgp6 = "GJ5vJbFMubPDOenKrmsvvVq9nawIJOWj1RBP9eSOJO";
		const _returnValuetfB9xza = await compileTrust(_valCe8Tgp6)
	});

	it('test for compileTrust', async () => {
		const _returnValueSm1cNM4 = undefined;
		const _valDWZwOip = () => { return _returnValueSm1cNM4 };
		const _returnValueYYnZYyP = await compileTrust(_valDWZwOip)
	});
})
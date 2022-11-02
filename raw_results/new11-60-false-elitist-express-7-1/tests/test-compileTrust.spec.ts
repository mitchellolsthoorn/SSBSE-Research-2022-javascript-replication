export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValuei0Vjlc7 = null;
		const _arrayValuenoQ7D0r = -1.5750041335176412;
		const _arrayValuetwTlDH2 = 9.4065395510323;
		const _arrayValueJRdmxKH = [_arrayValuei0Vjlc7, _arrayValuenoQ7D0r, _arrayValuetwTlDH2]
		const _arrayValuecjC6UAQ = true;
		const _valCKio0cU = [_arrayValueJRdmxKH, _arrayValuecjC6UAQ]
		const _returnValueqc5ESX = await compileTrust(_valCKio0cU)
	});

	it('test for compileTrust', async () => {
		const _valsvCzT3P = "WILDGvOqNfWFuPf2l8KYhm8eSqX6fu3v31jOuNtDci8ErvoUHUSVKNkweRwTuKLGdwKLoeiInEMNrRgG4SC";
		const _returnValueOD8wjM7 = await compileTrust(_valsvCzT3P)
	});

	it('test for compileTrust', async () => {
		const _returnValueqldnYTT = "59NMXeTOLMesYeNm";
		const _val0nfCzB = () => { return _returnValueqldnYTT };
		const _returnValueQPYeRuo = await compileTrust(_val0nfCzB)
	});

	it('test for compileTrust', async () => {
		const _val4YFu1j = true;
		const _returnValueXtFZ1nM = await compileTrust(_val4YFu1j)
	});

	it('test for compileTrust', async () => {
		const _valyG8DkR = 6.90455895508509;
		const _returnValueO8lvnjg = await compileTrust(_valyG8DkR)
	});
})
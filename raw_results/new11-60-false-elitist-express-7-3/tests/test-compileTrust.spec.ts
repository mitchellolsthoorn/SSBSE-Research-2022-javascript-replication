export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _returnValuedPAeSH1 = false;
		const _valjhNCVus = () => { return _returnValuedPAeSH1 };
		const _returnValueHFdRas = await compileTrust(_valjhNCVus)
	});

	it('test for compileTrust', async () => {
		const _arrayValueuXU2nRa = null;
		const _arrayValuetSytmG = {
		
	}
		const _valRz4rfi6 = [_arrayValueuXU2nRa, _arrayValuetSytmG]
		const _returnValueXGvNkVy = await compileTrust(_valRz4rfi6)
	});

	it('test for compileTrust', async () => {
		const _valxhkr1K = "x1WeetSmqRYPMIwAXRq5euGxF5BZG17w6q";
		const _returnValueRbhhasK = await compileTrust(_valxhkr1K)
	});

	it('test for compileTrust', async () => {
		const _valqoXmUS = 0.7023733452278016;
		const _returnValueIBmhcI3 = await compileTrust(_valqoXmUS)
	});

	it('test for compileTrust', async () => {
		const _valxWh0e1z = true;
		const _returnValueR4KNQIb = await compileTrust(_valxWh0e1z)
	});
})
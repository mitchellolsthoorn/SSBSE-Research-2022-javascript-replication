export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _valNRiKZzL = "pgObShQm1nAGcvfC5jqsYflkojZSpFbx1elBMWPPh72wMwPl4VXL3TBYoLb3Zu1XmKytZNrZFCaei";
		const _returnValueib8HDRQ = await compileTrust(_valNRiKZzL)
	});

	it('test for compileTrust', async () => {
		const _returnValuedWELrNI = null;
		const _valS5aNPEe = () => { return _returnValuedWELrNI };
		const _returnValueSUgsPOz = await compileTrust(_valS5aNPEe)
	});

	it('test for compileTrust', async () => {
		const _valxBg3c2l = false;
		const _returnValueqq50T5X = await compileTrust(_valxBg3c2l)
	});

	it('test for compileTrust', async () => {
		const _valiuydCoj = true;
		const _returnValueVczYVp0 = await compileTrust(_valiuydCoj)
	});

	it('test for compileTrust', async () => {
		const _valAgFuXdv = -0.10627331946324325;
		const _returnValueH2KodL3 = await compileTrust(_valAgFuXdv)
	});
})
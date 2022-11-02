export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValue2GHEDx = -6.366576240345676;
		const _arrayValueddosj3o = 1.8829070481902264;
		const _arrayValuexZQmhD3 = 6.778875525922341;
		const _arrayValueMql4r5i = [_arrayValue2GHEDx, _arrayValueddosj3o, _arrayValuexZQmhD3]
		const _arrayValueznbegk6 = "IEKDPQ6xrJah7EJvCKYhAlRRkGtx5WzJl1LSDKsMsMWfLQY9akmWBX3pdzSgP5FYxwMmfxdG44lzN2dOBORkOxFO438J";
		const _valkQaVYZv = [_arrayValueMql4r5i, _arrayValueznbegk6]
		const _returnValueqjMFQ57 = await compileTrust(_valkQaVYZv)
	});

	it('test for compileTrust', async () => {
		const _returnValueMsXPcC9 = undefined;
		const _valaq7lm3F = () => { return _returnValueMsXPcC9 };
		const _returnValueeXqK89Z = await compileTrust(_valaq7lm3F)
	});

	it('test for compileTrust', async () => {
		const _valsbBzO8G = 7.455785694311167;
		const _returnValueiuxamUm = await compileTrust(_valsbBzO8G)
	});

	it('test for compileTrust', async () => {
		const _valXKyCOet = true;
		const _returnValuexgGv6Ym = await compileTrust(_valXKyCOet)
	});

	it('test for compileTrust', async () => {
		const _valpmnZnpp = "mpmQ83hZyP1jzTboN7oFoLE3eHaZzFJeiWHYMgQRs3K";
		const _returnValueJgQMGT = await compileTrust(_valpmnZnpp)
	});
})
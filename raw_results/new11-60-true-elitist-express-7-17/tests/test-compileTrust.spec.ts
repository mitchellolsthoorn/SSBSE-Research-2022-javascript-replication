export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValuea8bukBK = {
		
	}
		const _arrayValueRLhUIEa = null;
		const _arrayValueYRTCNFV = "MDgIh3opGI5cYUa8x3BfzeU9AwwxvzFTSRllvD2nGdDcmiBtM0yTaLAeN5Iubhb31g";
		const _valh1YiwF = [_arrayValuea8bukBK, _arrayValueRLhUIEa, _arrayValueYRTCNFV]
		const _returnValuejhjzmHI = await compileTrust(_valh1YiwF)
	});

	it('test for compileTrust', async () => {
		const _valqCtoFLx = true;
		const _returnValuefvpZOiq = await compileTrust(_valqCtoFLx)
	});

	it('test for compileTrust', async () => {
		const _valHs4GYco = -6.599812540079311;
		const _returnValueul0NQr = await compileTrust(_valHs4GYco)
	});

	it('test for compileTrust', async () => {
		const _valpMFNE38 = "uS4SE5g9ykyw2P5DfxOibvXRPQEOtZjlOdri6QdfhXbePGJ0EkJa32oCqBQwmWaACQJqFawkCtZ9boYvkVZLZ11OPoCUTVnnm";
		const _returnValueApDDVdW = await compileTrust(_valpMFNE38)
	});

	it('test for compileTrust', async () => {
		const _returnValuegRxiY4W = 1.7752760122243352;
		const _returnValueiK6oDL = () => { return _returnValuegRxiY4W };
		const _valO5UgtVe = () => { return _returnValueiK6oDL };
		const _returnValueLUBTzok = await compileTrust(_valO5UgtVe)
	});
})
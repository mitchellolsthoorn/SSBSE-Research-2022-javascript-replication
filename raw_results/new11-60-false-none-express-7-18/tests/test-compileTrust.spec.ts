export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValueuxQNWFD = false;
		const _arrayValuej9yq6vH = false;
		const _arrayValue0ceBlX = null;
		const _arrayValueJzadnqO = "ocIK0bVzG81ScpN5kDDpV3VrZh5qKI";
		const _returnValuemSgPiKg = [_arrayValueuxQNWFD, _arrayValuej9yq6vH, _arrayValue0ceBlX, _arrayValueJzadnqO]
		const _valPRSVkh9 = () => { return _returnValuemSgPiKg };
		const _returnValueI11ILnB = await compileTrust(_valPRSVkh9)
	});

	it('test for compileTrust', async () => {
		const _valSGhhEQ = false;
		const _returnValuezwEYtp = await compileTrust(_valSGhhEQ)
	});

	it('test for compileTrust', async () => {
		const _valFDKlYL = -5.58338547086384;
		const _returnValueV5A36pi = await compileTrust(_valFDKlYL)
	});

	it('test for compileTrust', async () => {
		const _valTT48pB2 = "gupkLF7wpArl9KWMbGTyH2buDWogEsnKk9uhH99H3AFXTRqp3j";
		const _returnValueyoHpDIJ = await compileTrust(_valTT48pB2)
	});

	it('test for compileTrust', async () => {
		const _valG2a3vXj = true;
		const _returnValue06ik2y = await compileTrust(_valG2a3vXj)
	});
})
export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValuemCJv79 = -1.7181630857673262;
		const _valqE5jeJD = [_arrayValuemCJv79]
		const _returnValueN4Dexvx = await compileTrust(_valqE5jeJD)
	});

	it('test for compileTrust', async () => {
		const _valRQoU1yx = true;
		const _returnValueht6uTNu = await compileTrust(_valRQoU1yx)
	});

	it('test for compileTrust', async () => {
		const _valpGhEsld = -8.938653744589462;
		const _returnValueUXvauw7 = await compileTrust(_valpGhEsld)
	});

	it('test for compileTrust', async () => {
		const _valTmlrwZr = "42A3hrDkMKKJWG8slGIGHGNt90ET2rhSZlt8q5q4jcFznJArT";
		const _returnValueqGYzn5W = await compileTrust(_valTmlrwZr)
	});

	it('test for compileTrust', async () => {
		const _arrayValueorh9QVy = "mNvmwYxqnOMCLnyh";
		const _arrayValuebfAkAlL = null;
		const _arrayValueKGkTMSe = false;
		const _returnValueL5Dt4Vr = [_arrayValueorh9QVy, _arrayValuebfAkAlL, _arrayValueKGkTMSe]
		const _valLA5TQis = () => { return _returnValueL5Dt4Vr };
		const _returnValuetsdGuF = await compileTrust(_valLA5TQis)
	});
})
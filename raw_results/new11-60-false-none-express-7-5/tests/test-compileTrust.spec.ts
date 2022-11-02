export {}
const {compileTrust} = require("../../.syntest/instrumented/benchmark/top10npm/express/lib/utils.js");
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('compileTrust', () => {
	it('test for compileTrust', async () => {
		const _arrayValueckomISD = undefined;
		const _arrayValuejJtdxmv = null;
		const _valo56SpdG = [_arrayValueckomISD, _arrayValuejJtdxmv]
		const _returnValueFNo4ecL = await compileTrust(_valo56SpdG)
	});

	it('test for compileTrust', async () => {
		const _valPI1wCA8 = true;
		const _returnValueKDQ9qUa = await compileTrust(_valPI1wCA8)
	});

	it('test for compileTrust', async () => {
		const _valMLSJ3VV = 4.026242710078902;
		const _returnValueTAyQkBE = await compileTrust(_valMLSJ3VV)
	});

	it('test for compileTrust', async () => {
		const _returnValuepWYWzC = -2.5196719521562727;
		const _valCpEuBxW = () => { return _returnValuepWYWzC };
		const _returnValuezRmGLC6 = await compileTrust(_valCpEuBxW)
	});

	it('test for compileTrust', async () => {
		const _valz97Xunl = "nGy1zLoBhKum7KX78DK8dFuFHSibKj5YQwhYdCnYYwbWB7a1kDwmx12stRPanwNoOw43cZIwsw9P";
		const _returnValueRdG99iA = await compileTrust(_valz97Xunl)
	});
})
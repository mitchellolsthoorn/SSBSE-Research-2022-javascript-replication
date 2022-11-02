export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueVRoG46 = undefined;
		const _arrayValueYVPCsud = 0.7435295458911266;
		const _returnValueTQqUe1Y = [_arrayValueVRoG46, _arrayValueYVPCsud]
		const _returnValuexXZ2lUm = () => { return _returnValueTQqUe1Y };
		const _lengthd1YdiLu = () => { return _returnValuexXZ2lUm };
		const _objectj3JvTd = {
			"length": _lengthd1YdiLu
	}
		const _pathi2JLMKp = {
		
	}
		const _returnValueOsy164 = await hasPath(_objectj3JvTd, _pathi2JLMKp)
	});

	it('test for hasPath', async () => {
		const _lengthEvBNVPv = 8.081634603360875;
		const _objectroRlc08 = {
			"length": _lengthEvBNVPv
	}
		const _pathKO6TFIS = 6.187725960126997;
		const _returnValueDinsdib = await hasPath(_objectroRlc08, _pathKO6TFIS)
	});

	it('test for hasPath', async () => {
		const _objectUPTI8Mk = undefined;
		const _pathppAyQRk = null;
		const _returnValueXN5ayla = await hasPath(_objectUPTI8Mk, _pathppAyQRk)
	});
})
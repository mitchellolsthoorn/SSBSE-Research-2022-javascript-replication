export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValue0DCHaF = 7.653579274166873;
		const _objectFNgHxt1 = () => { return _returnValue0DCHaF };
		const _returnValueQ2ayKLs = true;
		const _iterateeqXtD1SU = () => { return _returnValueQ2ayKLs };
		const _accumulatord8AaiQ4 = {
		
	}
		const _returnValueyDFkWHx = await transform(_objectFNgHxt1, _iterateeqXtD1SU, _accumulatord8AaiQ4)
	});

	it('test for transform', async () => {
		const _objecte2ZnggV = "NfFQbVK8W3ej7RqHPc4EuYJYioq2545itZiTI4mUK5YtV6r3JiqFVUt28EX";
		const _returnValueNFDGJoq = {
		
	}
		const _iterateeaHsnDQk = () => { return _returnValueNFDGJoq };
		const _accumulatorpbHxDT = null;
		const _returnValueqyMuFpm = await transform(_objecte2ZnggV, _iterateeaHsnDQk, _accumulatorpbHxDT)
	});

	it('test for transform', async () => {
		const _returnValueyNaTuYh = undefined;
		const _returnValuebosk5e1 = () => { return _returnValueyNaTuYh };
		const _objectpFtaGVo = () => { return _returnValuebosk5e1 };
		const _arrayValuepFcFSW8 = 0.6276802854706212;
		const _arrayValueczqBOqr = -0.0578965725361229;
		const _returnValuexBu3hvE = [_arrayValuepFcFSW8, _arrayValueczqBOqr]
		const _iterateekmQQ0uj = () => { return _returnValuexBu3hvE };
		const _accumulatorh42XI9 = null;
		const _returnValueVROY6yw = await transform(_objectpFtaGVo, _iterateekmQQ0uj, _accumulatorh42XI9)
	});

	it('test for transform', async () => {
		const _constructor5dvU5e = false;
		const _objectHn2BGYP = {
			"constructor": _constructor5dvU5e
	}
		const _returnValueK3qFRCV = false;
		const _iterateeXfZwD9J = () => { return _returnValueK3qFRCV };
		const _accumulatorzuLBk0 = null;
		const _returnValueQYySY7Y = await transform(_objectHn2BGYP, _iterateeXfZwD9J, _accumulatorzuLBk0)
	});

	it('test for transform', async () => {
		const _objecthTzDi0h = []
		const _returnValueV445wS = undefined;
		const _iterateeJQX1DMJ = () => { return _returnValueV445wS };
		const _accumulatorGrzNt1 = null;
		const _returnValuePZrGv8p = await transform(_objecthTzDi0h, _iterateeJQX1DMJ, _accumulatorGrzNt1)
	});
})
export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectjXI3Hjm = undefined;
		const _lengthjBI5ISo = -3.5227856972644354;
		const _pathisipT6l = {
			"length": _lengthjBI5ISo
	}
		const _defaultValuecZDuVzf = {
		
	}
		const _returnValueqkmf7TI = await result(_objectjXI3Hjm, _pathisipT6l, _defaultValuecZDuVzf)
	});

	it('test for result', async () => {
		const _objects2K8RAh = undefined;
		const _pathWZYFiCV = null;
		const _defaultValuecAG8jKu = {
		
	}
		const _returnValueOAS3F48 = await result(_objects2K8RAh, _pathWZYFiCV, _defaultValuecAG8jKu)
	});

	it('test for result', async () => {
		const _objectJq6MPAQ = null;
		const _pathwJORn5 = null;
		const _returnValuej7hcINz = []
		const _defaultValueOPLbGT1 = () => { return _returnValuej7hcINz };
		const _returnValueaVYfaIM = await result(_objectJq6MPAQ, _pathwJORn5, _defaultValueOPLbGT1)
	});

	it('test for result', async () => {
		const _objectujCdZpD = undefined;
		const _path6B34Tg = []
		const _defaultValuemBC0Pto = {
		
	}
		const _returnValuetQYkXih = await result(_objectujCdZpD, _path6B34Tg, _defaultValuemBC0Pto)
	});
})
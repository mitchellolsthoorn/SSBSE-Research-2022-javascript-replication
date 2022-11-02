export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _arrayValuetSaf8Xy = undefined;
		const _arrayValuetqUG4Ik = "hzxxACeqjPrSpEKKk02";
		const _arrayValuexjbMdt7 = undefined;
		const _arrayValuejHrPAv = "4UvVvCmcr12QWhptUpjAjwKSIe6bwNdgiFll42z45d4W8z5POXoYB4lt4";
		const _arrayValueVTqRpI0 = [_arrayValuetSaf8Xy, _arrayValuetqUG4Ik, _arrayValuexjbMdt7, _arrayValuejHrPAv]
		const _arrayValueKI60NEl = false;
		const _objectmewANqm = [_arrayValueVTqRpI0, _arrayValueKI60NEl]
		const _lengthNqjSKKz = 3.475296100613054;
		const _pathM4as2d3 = {
			"length": _lengthNqjSKKz
	}
		const _defaultValueTaQ05Tf = {
		
	}
		const _returnValueNCzP0Nr = await result(_objectmewANqm, _pathM4as2d3, _defaultValueTaQ05Tf)
	});

	it('test for result', async () => {
		const _objectPpwRMxN = undefined;
		const _pathpUY9CoK = null;
		const _defaultValueWb0Tw8E = {
		
	}
		const _returnValueiEFPQ8 = await result(_objectPpwRMxN, _pathpUY9CoK, _defaultValueWb0Tw8E)
	});

	it('test for result', async () => {
		const _objectvGTCd8j = undefined;
		const _pathhowdURP = []
		const _defaultValuebealUkw = {
		
	}
		const _returnValueuidS9z = await result(_objectvGTCd8j, _pathhowdURP, _defaultValuebealUkw)
	});

	it('test for result', async () => {
		const _objectK78Bfg3 = undefined;
		const _pathqG19uA6 = null;
		const _returnValueqQGoQDP = "ndg0xGNWLb9ySVc41y";
		const _defaultValueOTcG19a = () => { return _returnValueqQGoQDP };
		const _returnValueduXfW07 = await result(_objectK78Bfg3, _pathqG19uA6, _defaultValueOTcG19a)
	});
})
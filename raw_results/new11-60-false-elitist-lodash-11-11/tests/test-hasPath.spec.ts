export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthmaF9Jyv = "kQHDUj7UPChQLDd8unRGum5t6rOnfVdgQJnWJrcVWDJkzkDexsTJVwGo8Y6X8hl";
		const _objectorqXbjP = {
			"length": _lengthmaF9Jyv
	}
		const _pathbrUlptm = {
		
	}
		const _returnValueLva5FUH = await hasPath(_objectorqXbjP, _pathbrUlptm)
	});

	it('test for hasPath', async () => {
		const _lengthduwC8du = "6uCsDG0nwnId4H1hw3wouQndG68wk6AmVhuXvWxYbc";
		const _objectGyjq2N3 = {
			"length": _lengthduwC8du
	}
		const _arrayValuexCCiLy4 = undefined;
		const _arrayValueZPH0Evc = {
		
	}
		const _arrayValueCYqnlt = [_arrayValuexCCiLy4, _arrayValueZPH0Evc]
		const _returnValueMkCQ7JG = "fdBYBY80K7Hrdoi7rRDeAPdjlrdJqo1mdeSUopgqr";
		const _arrayValuecCM4WLH = () => { return _returnValueMkCQ7JG };
		const _arrayValuerp6gUHT = {
		
	}
		const _pathgmkTcrG = [_arrayValueCYqnlt, _arrayValuecCM4WLH, _arrayValuerp6gUHT]
		const _returnValueK2lerV = await hasPath(_objectGyjq2N3, _pathgmkTcrG)
	});

	it('test for hasPath', async () => {
		const _lengthDA96Wt6 = {
		
	}
		const _objectCb4aSCL = {
			"length": _lengthDA96Wt6
	}
		const _pathBrVMcr = true;
		const _returnValueyo1FvqH = await hasPath(_objectCb4aSCL, _pathBrVMcr)
	});

	it('test for hasPath', async () => {
		const _objectquMEPMI = null;
		const _pathTa0S1c = "9NOkzWIAD8SANzNN8MgUoBWOTNjnyHyoyFWcoM4go";
		const _returnValueF1PT45 = await hasPath(_objectquMEPMI, _pathTa0S1c)
	});
})
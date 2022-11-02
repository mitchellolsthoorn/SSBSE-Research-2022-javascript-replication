export {}
import split from "../../.syntest/instrumented/benchmark/top10npm/lodash/split.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('split', () => {
	it('test for split', async () => {
		const _stringpVc10qB = false;
		const _arrayValueWMor21K = null;
		const _arrayValueInmaeE = 9.459024378256686;
		const _separatorCFdRfm2 = [_arrayValueWMor21K, _arrayValueInmaeE]
		const _arrayValueJXKpoNu = 9.795475843514748;
		const _arrayValuePJRyfnd = null;
		const _arrayValueO0RPefe = "VXSRsu8ukJoBLbLFoG20lQ9OMZ6yekr7NnIIiHqShnxs";
		const _arrayValues1GX0c2 = 6.885460521691762;
		const _limitrRkVHC = [_arrayValueJXKpoNu, _arrayValuePJRyfnd, _arrayValueO0RPefe, _arrayValues1GX0c2]
		const _returnValuebbRHjEb = await split(_stringpVc10qB, _separatorCFdRfm2, _limitrRkVHC)
	});

	it('test for split', async () => {
		const _stringJDpL1wX = null;
		const _separatorN9sWE43 = true;
		const _limitxTX36MK = undefined;
		const _returnValueHdK6hWp = await split(_stringJDpL1wX, _separatorN9sWE43, _limitxTX36MK)
	});

	it('test for split', async () => {
		const _stringcQ44F1a = "LNYejN9j7yaLAb4KWDT94qARvOFGOppPhIOvK5gQNugv2JYt9qL3fo3iv0X0qXxDHGHO";
		const _separatorCVYhr4X = "C";
		const _limitGRtPIGH = undefined;
		const _returnValuebZJhclv = await split(_stringcQ44F1a, _separatorCVYhr4X, _limitGRtPIGH)
	});
})
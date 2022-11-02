export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValuelCVq2V1 = false;
		const _arrayValueLn4IH5 = null;
		const _arrayValueV1oZuqA = null;
		const _returnValueSdAAM9a = [_arrayValuelCVq2V1, _arrayValueLn4IH5, _arrayValueV1oZuqA]
		const _objectsIc52Fx = () => { return _returnValueSdAAM9a };
		const _pathtqUPDz6 = {
		
	}
		const _returnValueTpL67zo = await hasPath(_objectsIc52Fx, _pathtqUPDz6)
	});

	it('test for hasPath', async () => {
		const _lengthWD2LjN2 = true;
		const _objectzBmZ09A = {
			"length": _lengthWD2LjN2
	}
		const _pathat1Poa7 = "FQVZlc4mDi76CuVXrC2a74Mgzk6iRs6fdwSQ6KD3rpXiW2uFDPOBefjzR3r6POpLkshubjnS7sz";
		const _returnValueLaJfcuT = await hasPath(_objectzBmZ09A, _pathat1Poa7)
	});

	it('test for hasPath', async () => {
		const _objectiRmNIEv = null;
		const _pathknlpF4x = null;
		const _returnValueyu0EVxy = await hasPath(_objectiRmNIEv, _pathknlpF4x)
	});
})
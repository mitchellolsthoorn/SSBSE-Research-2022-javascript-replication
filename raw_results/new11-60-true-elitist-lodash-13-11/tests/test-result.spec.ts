export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectZ5Ko1yZ = undefined;
		const _lengthUH0tKdC = -5.648431653275704;
		const _pathdmn5bjO = {
			"length": _lengthUH0tKdC
	}
		const _defaultValueX1w7KF = {
		
	}
		const _returnValuecoNVg0V = await result(_objectZ5Ko1yZ, _pathdmn5bjO, _defaultValueX1w7KF)
	});

	it('test for result', async () => {
		const _objectUGuuZ3h = undefined;
		const _pathvZwHCl1 = true;
		const _defaultValueY3uFN1z = {
		
	}
		const _returnValuepIirW2O = await result(_objectUGuuZ3h, _pathvZwHCl1, _defaultValueY3uFN1z)
	});

	it('test for result', async () => {
		const _objectzRlaJM = undefined;
		const _pathDjcpl3Z = []
		const _defaultValuerraW7dO = {
		
	}
		const _returnValuesBtL2pA = await result(_objectzRlaJM, _pathDjcpl3Z, _defaultValuerraW7dO)
	});

	it('test for result', async () => {
		const _objectHC2PwNt = undefined;
		const _pathr9QxAtI = "r";
		const _returnValueVrOhKYp = null;
		const _defaultValueJH7XUIw = () => { return _returnValueVrOhKYp };
		const _returnValue2PowCe = await result(_objectHC2PwNt, _pathr9QxAtI, _defaultValueJH7XUIw)
	});
})
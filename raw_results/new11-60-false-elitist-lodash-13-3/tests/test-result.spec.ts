export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectvKKSBHL = undefined;
		const _lengthgGwz4Wh = 4.072461402267235;
		const _pathIq8knl6 = {
			"length": _lengthgGwz4Wh
	}
		const _defaultValuedK4Z8Du = {
		
	}
		const _returnValueYmwG8s = await result(_objectvKKSBHL, _pathIq8knl6, _defaultValuedK4Z8Du)
	});

	it('test for result', async () => {
		const _object5ZMeBA = undefined;
		const _arrayValueIhbfjVc = null;
		const _arrayValueEzveKB = undefined;
		const _arrayValuejlr4Ssq = undefined;
		const _patha4FrYi2 = [_arrayValueIhbfjVc, _arrayValueEzveKB, _arrayValuejlr4Ssq]
		const _defaultValuethN9zlh = {
		
	}
		const _returnValued6fRFth = await result(_object5ZMeBA, _patha4FrYi2, _defaultValuethN9zlh)
	});

	it('test for result', async () => {
		const _objectD0c1vz = undefined;
		const _pathtdFzlS = []
		const _defaultValuedGEbPuz = {
		
	}
		const _returnValuecs8SnZu = await result(_objectD0c1vz, _pathtdFzlS, _defaultValuedGEbPuz)
	});

	it('test for result', async () => {
		const _objectQhTE3gA = undefined;
		const _pathhamWoVS = true;
		const _returnValue43erPu = null;
		const _defaultValueoj0NVEE = () => { return _returnValue43erPu };
		const _returnValuelaz0i9E = await result(_objectQhTE3gA, _pathhamWoVS, _defaultValueoj0NVEE)
	});
})
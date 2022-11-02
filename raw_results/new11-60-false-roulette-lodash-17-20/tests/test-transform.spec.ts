export {}
import transform from "../../.syntest/instrumented/benchmark/top10npm/lodash/transform.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import SetCache from "../../benchmark/top10npm/lodash/.internal/SetCache.js";

describe('transform', () => {
	it('test for transform', async () => {
		const _returnValuechln5no = null;
		const _objectj1Z2voE = () => { return _returnValuechln5no };
		const _returnValueEjNr3Qc = null;
		const _iterateeGqN3R8r = () => { return _returnValueEjNr3Qc };
		const _accumulatorhWxLFJ = null;
		const _returnValueUxXzOFg = await transform(_objectj1Z2voE, _iterateeGqN3R8r, _accumulatorhWxLFJ)
	});

	it('test for transform', async () => {
		const _constructoruaiGJmZ = -8.162088320430577;
		const _objectLKnlrU = {
			"constructor": _constructoruaiGJmZ
	}
		const _returnValued67aO4S = false;
		const _iterateehp4z4Gb = () => { return _returnValued67aO4S };
		const _accumulatorvI6ViCz = null;
		const _returnValueHO1UVU = await transform(_objectLKnlrU, _iterateehp4z4Gb, _accumulatorvI6ViCz)
	});

	it('test for transform', async () => {
		const _valueskcY3uU9 = []
		const _objectSvwQVLm = new SetCache(_valueskcY3uU9)
		const _returnValue8xFI1e = {
		
	}
		const _valueNYDNorB = () => { return _returnValue8xFI1e };
		const _returnValuewmHlWfw = await _objectSvwQVLm.add(_valueNYDNorB)
		const _returnValueYAhPl6 = true;
		const _iterateeDVPovqS = () => { return _returnValueYAhPl6 };
		const _accumulatorUtsDCVT = {
		
	}
		const _returnValue77DNOl = await transform(_objectSvwQVLm, _iterateeDVPovqS, _accumulatorUtsDCVT)
	});

	it('test for transform', async () => {
		const _arrayValueZkeDeQ = "hw6xbiR5gpELU3OzOop4S1jKAyt5O2g4AstqKW";
		const _arrayValuezbNUVR = 4.453497772879549;
		const _arrayValueYjt9sBg = "JnnYVkYGmHQQciNFqJhapvgp6BxOEKcv25o6ezF7GXQklYXq3NFN32MLTq3KMU5qcOqATZLXCh4j0K8tsbPY14F8GA3ta";
		const _arrayValuewyigjP = undefined;
		const _arrayValueNEcJRy0 = [_arrayValueYjt9sBg, _arrayValuewyigjP]
		const _returnValuesj24EOr = [_arrayValuezbNUVR, _arrayValueNEcJRy0]
		const _arrayValueEqq0Rsb = () => { return _returnValuesj24EOr };
		const _arrayValueXfAXagK = null;
		const _objectGKRqn1W = [_arrayValueZkeDeQ, _arrayValueEqq0Rsb, _arrayValueXfAXagK]
		const _returnValueOaVRoMe = {
		
	}
		const _iterateeFgeSq0m = () => { return _returnValueOaVRoMe };
		const _accumulatorkrmadqw = null;
		const _returnValueIhsD7H = await transform(_objectGKRqn1W, _iterateeFgeSq0m, _accumulatorkrmadqw)
	});
})
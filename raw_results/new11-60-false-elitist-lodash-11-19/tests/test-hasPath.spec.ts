export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectwm4CUv0 = null;
		const _pathIynOQva = {
		
	}
		const _returnValueHobCbci = await hasPath(_objectwm4CUv0, _pathIynOQva)
	});

	it('test for hasPath', async () => {
		const _lengthOuk2nWe = undefined;
		const _objectVt08XDN = {
			"length": _lengthOuk2nWe
	}
		const _pathLM0Fxhf = undefined;
		const _returnValuez9qfTI9 = await hasPath(_objectVt08XDN, _pathLM0Fxhf)
	});

	it('test for hasPath', async () => {
		const _objectgOdqYr9 = undefined;
		const _paths6z28jI = true;
		const _returnValueftMM5kF = await hasPath(_objectgOdqYr9, _paths6z28jI)
	});
})
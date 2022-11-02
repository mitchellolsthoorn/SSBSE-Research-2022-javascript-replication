export {}
import result from "../../.syntest/instrumented/benchmark/top10npm/lodash/result.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('result', () => {
	it('test for result', async () => {
		const _objectqC1T8C4 = undefined;
		const _lengthPD8mF9 = 2.786065988818212;
		const _pathMqecbdZ = {
			"length": _lengthPD8mF9
	}
		const _defaultValueAWfX11g = {
		
	}
		const _returnValueTg6USOc = await result(_objectqC1T8C4, _pathMqecbdZ, _defaultValueAWfX11g)
	});

	it('test for result', async () => {
		const _objectNv85Gra = undefined;
		const _pathFilgzP8 = undefined;
		const _defaultValueolRrThE = {
		
	}
		const _returnValueDR3rIVL = await result(_objectNv85Gra, _pathFilgzP8, _defaultValueolRrThE)
	});

	it('test for result', async () => {
		const _objectnfOehFL = undefined;
		const _pathhvscglI = []
		const _defaultValuetdhNJSA = {
		
	}
		const _returnValueQJhjlB0 = await result(_objectnfOehFL, _pathhvscglI, _defaultValuetdhNJSA)
	});

	it('test for result', async () => {
		const _objecteWGpn7 = -0.9725576020812383;
		const _pathFqz7DR1 = null;
		const _returnValueDPE2mTN = undefined;
		const _defaultValueUQMa8bM = () => { return _returnValueDPE2mTN };
		const _returnValueWaVrVe4 = await result(_objecteWGpn7, _pathFqz7DR1, _defaultValueUQMa8bM)
	});
})
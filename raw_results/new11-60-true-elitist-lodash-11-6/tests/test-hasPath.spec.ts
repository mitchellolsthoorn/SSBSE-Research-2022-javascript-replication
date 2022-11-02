export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthyKpARUM = true;
		const _objectKQ1rbxJ = {
			"length": _lengthyKpARUM
	}
		const _pathsFU1o2H = {
		
	}
		const _returnValueZ6SeLbn = await hasPath(_objectKQ1rbxJ, _pathsFU1o2H)
	});

	it('test for hasPath', async () => {
		const _arrayValueeB7hhQI = true;
		const _arrayValueFJgnN6V = {
		
	}
		const _arrayValueLuWPdOM = null;
		const _lengthb4LSdVh = [_arrayValueeB7hhQI, _arrayValueFJgnN6V, _arrayValueLuWPdOM]
		const _objectMZJ0ia = {
			"length": _lengthb4LSdVh
	}
		const _pathRF8D7i = undefined;
		const _returnValueJbqFAco = await hasPath(_objectMZJ0ia, _pathRF8D7i)
	});

	it('test for hasPath', async () => {
		const _objectMpgFtzo = undefined;
		const _pathKNpXHy = -4.14577792303128;
		const _returnValueLFkbJo = await hasPath(_objectMpgFtzo, _pathKNpXHy)
	});
})
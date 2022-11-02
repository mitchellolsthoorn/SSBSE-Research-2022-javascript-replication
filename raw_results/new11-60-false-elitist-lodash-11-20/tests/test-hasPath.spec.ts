export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValuejLjwCmO = true;
		const _arrayValue2gEpBB = 4.41359976229511;
		const _returnValueKz2WIaF = [_arrayValuejLjwCmO, _arrayValue2gEpBB]
		const _lengthzF8S8DI = () => { return _returnValueKz2WIaF };
		const _objecttm0cUGT = {
			"length": _lengthzF8S8DI
	}
		const _pathnOrKfRf = {
		
	}
		const _returnValueQTZjOPX = await hasPath(_objecttm0cUGT, _pathnOrKfRf)
	});

	it('test for hasPath', async () => {
		const _arrayValueKltWBM = undefined;
		const _arrayValueuFS00Z7 = -8.617174185725691;
		const _lengthD68VjxP = [_arrayValueKltWBM, _arrayValueuFS00Z7]
		const _objectQu3QrJv = {
			"length": _lengthD68VjxP
	}
		const _pathlYYlHT = true;
		const _returnValueoptxgq = await hasPath(_objectQu3QrJv, _pathlYYlHT)
	});

	it('test for hasPath', async () => {
		const _objectfCqTV02 = null;
		const _pathnXcjE5L = null;
		const _returnValueD6TWCOg = await hasPath(_objectfCqTV02, _pathnXcjE5L)
	});
})
export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthNWtjOBc = null;
		const _objectw7fbnKh = {
			"length": _lengthNWtjOBc
	}
		const _pathnuMwG2 = {
		
	}
		const _returnValuei22P9Wo = await hasPath(_objectw7fbnKh, _pathnuMwG2)
	});

	it('test for hasPath', async () => {
		const _lengthtDsCXAF = null;
		const _objectMb4pKJf = {
			"length": _lengthtDsCXAF
	}
		const _pathW4NhLr = null;
		const _returnValuesTSSAKo = await hasPath(_objectMb4pKJf, _pathW4NhLr)
	});

	it('test for hasPath', async () => {
		const _objectdgWBZ2 = null;
		const _pathW9cOsdA = 7.441233762082273;
		const _returnValue5Yo0p5 = await hasPath(_objectdgWBZ2, _pathW9cOsdA)
	});
})
export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthVsJQyF2 = 9.571342865205711;
		const _objectgOJqoH = {
			"length": _lengthVsJQyF2
	}
		const _pathxhMpOj6 = {
		
	}
		const _returnValuexa7rIYb = await hasPath(_objectgOJqoH, _pathxhMpOj6)
	});

	it('test for hasPath', async () => {
		const _lengths6q3Tzx = undefined;
		const _objectYgnx1EM = {
			"length": _lengths6q3Tzx
	}
		const _pathUjr6O1l = undefined;
		const _returnValueq383Is6 = await hasPath(_objectYgnx1EM, _pathUjr6O1l)
	});

	it('test for hasPath', async () => {
		const _objectZlFhWYU = null;
		const _pathQh9Jl1f = undefined;
		const _returnValuepZBBa3H = await hasPath(_objectZlFhWYU, _pathQh9Jl1f)
	});
})
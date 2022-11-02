export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueCTTzV4v = "fba1GbF7xQcNZYny9iRmUOuxFz3tH31Si29cA1L6JZ040xwiqtviNvEX6i7D1Wrh7";
		const _lengthVVfTfd7 = [_arrayValueCTTzV4v]
		const _objectNr7N5Dd = {
			"length": _lengthVVfTfd7
	}
		const _arrayValueuHBjVP4 = {
		
	}
		const _arrayValueZCZhpzB = null;
		const _arrayValueNyaqqF = undefined;
		const _pathFAemHqV = [_arrayValueuHBjVP4, _arrayValueZCZhpzB, _arrayValueNyaqqF]
		const _returnValueYl7ltrg = await hasPath(_objectNr7N5Dd, _pathFAemHqV)
	});

	it('test for hasPath', async () => {
		const _lengthaCuwQlx = -2.214640091510665;
		const _objectIJ3TRFF = {
			"length": _lengthaCuwQlx
	}
		const _returnValuexSGNSo7 = null;
		const _pathSAsYDjE = () => { return _returnValuexSGNSo7 };
		const _returnValueLPmQpTH = await hasPath(_objectIJ3TRFF, _pathSAsYDjE)
	});

	it('test for hasPath', async () => {
		const _objectfjZc0Na = null;
		const _returnValueeC5JZ9 = true;
		const _pathW6jhC51 = () => { return _returnValueeC5JZ9 };
		const _returnValueTKcnRRq = await hasPath(_objectfjZc0Na, _pathW6jhC51)
	});
})
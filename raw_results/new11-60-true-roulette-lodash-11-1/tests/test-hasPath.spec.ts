export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueJlFwy1i = "xBqkAw7FdxvSO5T6Njdo32t4rstdi7QuSg2GG0huDVwJUoX6zm7IuTChhoOLO";
		const _arrayValueaUJyx0F = undefined;
		const _objectjqOZQL9 = [_arrayValueJlFwy1i, _arrayValueaUJyx0F]
		const _pathn343wI3 = "45vJpuQJqbh3MKXB0bj24h6hmznmS5EUPcdCAyBMp";
		const _returnValueX8eyYP = await hasPath(_objectjqOZQL9, _pathn343wI3)
	});

	it('test for hasPath', async () => {
		const _objectuCAyz4K = null;
		const _returnValuegNz6MmM = -1.8156899266748834;
		const _pathRtjuIWS = () => { return _returnValuegNz6MmM };
		const _returnValueSncDrNX = await hasPath(_objectuCAyz4K, _pathRtjuIWS)
	});
})
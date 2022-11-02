export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueYpl2E1 = -5.6802811694098105;
		const _objectWLi8rt = () => { return _returnValueYpl2E1 };
		const _pathAlxOcOS = -1.756806843965908;
		const _returnValueee7Cdxm = await hasPath(_objectWLi8rt, _pathAlxOcOS)
	});

	it('test for hasPath', async () => {
		const _objectbN6n2th = null;
		const _pathPLHhpDf = undefined;
		const _returnValueCyZrldU = await hasPath(_objectbN6n2th, _pathPLHhpDf)
	});

	it('test for hasPath', async () => {
		const _objectMwIXpaY = "C10gjCsaG";
		const _arrayValueQ8FqOzL = "3";
		const _pathBjRGiiN = [_arrayValueQ8FqOzL]
		const _returnValueNBHIicv = await hasPath(_objectMwIXpaY, _pathBjRGiiN)
	});
})
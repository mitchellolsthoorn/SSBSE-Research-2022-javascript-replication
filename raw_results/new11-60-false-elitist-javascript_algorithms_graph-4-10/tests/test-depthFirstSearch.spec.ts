export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValueSY9I6ds = 3.98963353104606;
		const _arrayValueh4NZiUl = -0.725613872935412;
		const _arrayValueELiZSj = [_arrayValueSY9I6ds, _arrayValueh4NZiUl]
		const _arrayValueNkMhgbw = false;
		const _graphRHaOGQ9 = [_arrayValueELiZSj, _arrayValueNkMhgbw]
		const _returnValueT7S0LZL = undefined;
		const _startVertexSOCysZL = () => { return _returnValueT7S0LZL };
		const _arrayValueg8Yl8Hf = true;
		const _arrayValueeu9gD1 = "O2AqvNOEhfWbocL3F4io0oq8y";
		const _arrayValueC8tscT4 = "wVBTuPmOA77lN4gHrQhm";
		const _callbacksauJB8LD = [_arrayValueg8Yl8Hf, _arrayValueeu9gD1, _arrayValueC8tscT4]
		const _returnValuezX9Z0n = await depthFirstSearch(_graphRHaOGQ9, _startVertexSOCysZL, _callbacksauJB8LD)
	});
})
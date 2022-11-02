export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _arrayValuenKua42c = "Nqdt5Kk1m2ChGIzPe3aq8jUgJmeic3kqSeEGdLyJN9sSfswFhn8c3u54kUVcW9LhSneKqazwXWULNY";
		const _arrayValue5JedMw = []
		const _graphKmiVCTb = [_arrayValuenKua42c, _arrayValue5JedMw]
		const _returnValuePxrD3qz = await kruskal(_graphKmiVCTb)
	});
})
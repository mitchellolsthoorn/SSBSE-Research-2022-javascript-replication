export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphnVvGy0t = "8U7O2ra3SbqJgXRqpB377UvCv98PGxiEo";
		const _returnValueHFZYufl = await prim(_graphnVvGy0t)
	});

	it('test for prim', async () => {
		const _isDirectedrkPKKzk = "5mOaWEmInS55HNysPIfiPfDsvZ";
		const _returnValuewrrhRin = undefined;
		const _getAllVerticesUkNaVMx = () => { return _returnValuewrrhRin };
		const _graphUJsI873 = {
			"isDirected": _isDirectedrkPKKzk,
		"getAllVertices": _getAllVerticesUkNaVMx
	}
		const _returnValuey9QHqum = await prim(_graphUJsI873)
	});

	it('test for prim', async () => {
		const _isDirectedlWkZP9t = false;
		const _graphKiigONa = new Graph(_isDirectedlWkZP9t)
		const _returnValueiln1qTc = null;
		const _getKeysYuanbT = () => { return _returnValueiln1qTc };
		const _newVertexcDJtSju = {
			"getKey": _getKeysYuanbT
	}
		const _returnValueTv9lQ1M = await _graphKiigONa.addVertex(_newVertexcDJtSju)
		const _returnValuenRMMHlJ = await _graphKiigONa.getWeight()
		const _returnValueLQn8O1v = await prim(_graphKiigONa)
	});
})
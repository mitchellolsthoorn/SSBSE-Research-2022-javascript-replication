export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuelSN1Knb = "uJDfEeTBLjqRz6crOmZmUtPJDYrhjKXnbW9NoSXRgEiS";
		const _getAllVerticesrpm2b46 = () => { return _returnValuelSN1Knb };
		const _returnValueKRE5DpE = null;
		const _getAllEdgesZ2So2IG = () => { return _returnValueKRE5DpE };
		const _graphbU9YwRe = {
			"getAllVertices": _getAllVerticesrpm2b46,
		"getAllEdges": _getAllEdgesZ2So2IG
	}
		const _returnValuerubN5wR = await detectUndirectedCycleUsingDisjointSet(_graphbU9YwRe)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedITE7LyH = false;
		const _graphaVJl4QN = new Graph(_isDirectedITE7LyH)
		const _returnValuer9ZGcIg = await _graphaVJl4QN.getAllEdges()
		const _returnValuet0aqUKp = await _graphaVJl4QN.getAdjacencyMatrix()
		const _returnValuenbzGBuS = await _graphaVJl4QN.getWeight()
		const _returnValueNBowcy = await _graphaVJl4QN.getWeight()
		const _returnValueoO07Xux = await _graphaVJl4QN.reverse()
		const _returnValueRNDkFwM = await detectUndirectedCycleUsingDisjointSet(_graphaVJl4QN)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuejSdMt88 = []
		const _getAllVerticesMtIYJAc = () => { return _returnValuejSdMt88 };
		const _arrayValueei3KzZf = undefined;
		const _arrayValuegsASFbx = null;
		const _arrayValuey89O7Wh = 9.482888448595393;
		const _returnValuejCQppu4 = [_arrayValueei3KzZf, _arrayValuegsASFbx, _arrayValuey89O7Wh]
		const _getAllEdgeszUxNcEN = () => { return _returnValuejCQppu4 };
		const _graphWTomss1 = {
			"getAllVertices": _getAllVerticesMtIYJAc,
		"getAllEdges": _getAllEdgeszUxNcEN
	}
		const _returnValueG0HNzFC = await detectUndirectedCycleUsingDisjointSet(_graphWTomss1)
	});
})
export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueCtCOeli = true;
		const _getAllVerticesyZEdPYu = () => { return _returnValueCtCOeli };
		const _getAllEdgesnH6fUZb = true;
		const _graphnl3Sl17 = {
			"getAllVertices": _getAllVerticesyZEdPYu,
		"getAllEdges": _getAllEdgesnH6fUZb
	}
		const _returnValueOKc1BSY = await detectUndirectedCycleUsingDisjointSet(_graphnl3Sl17)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedZe95Hgl = true;
		const _graphSKN3vZ4 = new Graph(_isDirectedZe95Hgl)
		const _returnValueMOjPbqQ = await _graphSKN3vZ4.getVerticesIndices()
		const _vertexKeyDfprTPw = undefined;
		const _returnValueI9Vwmil = await _graphSKN3vZ4.getVertexByKey(_vertexKeyDfprTPw)
		const _returnValueE9svW5 = await _graphSKN3vZ4.toString()
		const _returnValueun3wu1M = await _graphSKN3vZ4.getWeight()
		const _returnValueGa0uXOd = await detectUndirectedCycleUsingDisjointSet(_graphSKN3vZ4)
	});
})
export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueQVeQtNj = null;
		const _getAllVerticesyUgbZS4 = () => { return _returnValueQVeQtNj };
		const _returnValueaN4TS95 = null;
		const _getAllEdgesKZpulwl = () => { return _returnValueaN4TS95 };
		const _graphwmqUvNg = {
			"getAllVertices": _getAllVerticesyUgbZS4,
		"getAllEdges": _getAllEdgesKZpulwl
	}
		const _returnValueS4lYsmD = await detectUndirectedCycleUsingDisjointSet(_graphwmqUvNg)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedkyYgfrI = true;
		const _graphbqW41S8 = new Graph(_isDirectedkyYgfrI)
		const _returnValuegkezga = await _graphbqW41S8.getAdjacencyMatrix()
		const _returnValuey16iVqc = await detectUndirectedCycleUsingDisjointSet(_graphbqW41S8)
	});
})
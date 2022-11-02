export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueKExjU7u = null;
		const _getAllVerticesehr2T2z = () => { return _returnValueKExjU7u };
		const _arrayValuervUGoOl = null;
		const _arrayValueaaexZOC = true;
		const _arrayValuekzuc1j = "3L6fHvT97B6O1tF8Cl0EnH1luSJvcL";
		const _returnValueXuVjEC = [_arrayValuervUGoOl, _arrayValueaaexZOC, _arrayValuekzuc1j]
		const _getAllEdges7NmCuD = () => { return _returnValueXuVjEC };
		const _graphi0XcInk = {
			"getAllVertices": _getAllVerticesehr2T2z,
		"getAllEdges": _getAllEdges7NmCuD
	}
		const _returnValueDZV3RSg = await detectUndirectedCycleUsingDisjointSet(_graphi0XcInk)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedFd7dZWJ = true;
		const _graphgI0qJdT = new Graph(_isDirectedFd7dZWJ)
		const _returnValuestNw78P = await _graphgI0qJdT.getAdjacencyMatrix()
		const _returnValuetS6ZhJw = await _graphgI0qJdT.getAllEdges()
		const _returnValueOLGKIJW = await _graphgI0qJdT.getVerticesIndices()
		const _returnValueJ9LNKfO = await _graphgI0qJdT.getAllEdges()
		const _returnValuevPYHQnR = await detectUndirectedCycleUsingDisjointSet(_graphgI0qJdT)
	});
})
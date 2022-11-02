export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphCVvaEi = []
		const _returnValuee2L9Twf = await detectUndirectedCycleUsingDisjointSet(_graphCVvaEi)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedvVhzSGN = false;
		const _graphz042rOe = new Graph(_isDirectedvVhzSGN)
		const _vertexKeyrNR6UXZ = "J1lMa1txaIBcPXxaBN1Nt45ydBeRQ";
		const _returnValueRXvl3yJ = await _graphz042rOe.getVertexByKey(_vertexKeyrNR6UXZ)
		const _returnValuey1jUgB4 = await _graphz042rOe.getAllVertices()
		const _returnValueHq866Hs = await detectUndirectedCycleUsingDisjointSet(_graphz042rOe)
	});
})
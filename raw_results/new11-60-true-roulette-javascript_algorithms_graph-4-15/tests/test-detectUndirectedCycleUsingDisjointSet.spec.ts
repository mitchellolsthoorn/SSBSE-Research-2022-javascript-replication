export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueDLFYBG = undefined;
		const _returnValuetUG2Kke = () => { return _returnValueDLFYBG };
		const _getAllVerticesXHzKqAP = () => { return _returnValuetUG2Kke };
		const _returnValueHQUOlZB = false;
		const _returnValueGv4DdCb = () => { return _returnValueHQUOlZB };
		const _returnValueSeORdCy = () => { return _returnValueGv4DdCb };
		const _getAllEdgesgTAhXZY = () => { return _returnValueSeORdCy };
		const _graphqdxGjFu = {
			"getAllVertices": _getAllVerticesXHzKqAP,
		"getAllEdges": _getAllEdgesgTAhXZY
	}
		const _returnValuendLCad = await detectUndirectedCycleUsingDisjointSet(_graphqdxGjFu)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedTW0oQ8G = false;
		const _graphxQ4nOI = new Graph(_isDirectedTW0oQ8G)
		const _vertexKeyOsel1yg = "hXTz6OB5uzVsfxUzNzsllQEg5knTYuRpj2Db0Fg5jtRoHIE5qh4Gbl36";
		const _returnValueaQvpHIr = await _graphxQ4nOI.getVertexByKey(_vertexKeyOsel1yg)
		const _returnValueWg74tL = await detectUndirectedCycleUsingDisjointSet(_graphxQ4nOI)
	});
})
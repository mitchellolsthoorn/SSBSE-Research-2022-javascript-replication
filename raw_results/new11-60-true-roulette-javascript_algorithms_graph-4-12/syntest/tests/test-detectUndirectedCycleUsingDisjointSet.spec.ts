export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphixftbW1 = "pLron0x7yHnVCh0x9fCkL5gu6eMrmNNGVRMrkWSrTvtiYqTRk6lx1L6OqaK";
		const _returnValueFWYWxHj = await detectUndirectedCycleUsingDisjointSet(_graphixftbW1)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedIDzu6rk = true;
		const _graphbQz8BSn = new Graph(_isDirectedIDzu6rk)
		const _returnValueDcoRsr = await _graphbQz8BSn.getWeight()
		const _arrayValueHAwa9k5 = "2WDJWDrdLhiJuiwVJH6sdEU2yOp8SsKOouSUR34WMsyT2dAOdY1o";
		const _vertexKeycMh0GGs = [_arrayValueHAwa9k5]
		const _returnValueKXrZDxC = await _graphbQz8BSn.getVertexByKey(_vertexKeycMh0GGs)
		const _returnValuehgXSwQh = await _graphbQz8BSn.getAllEdges()
		const _returnValueH3Fz2lJ = await detectUndirectedCycleUsingDisjointSet(_graphbQz8BSn)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueBvOIilW = []
		const _getAllVerticesuAuprYA = () => { return _returnValueBvOIilW };
		const _arrayValueozbbDpK = null;
		const _arrayValueaZX1sTJ = false;
		const _returnValueaaalCF3 = [_arrayValueozbbDpK, _arrayValueaZX1sTJ]
		const _getAllEdgesMsHqypD = () => { return _returnValueaaalCF3 };
		const _graphXPTQmIh = {
			"getAllVertices": _getAllVerticesuAuprYA,
		"getAllEdges": _getAllEdgesMsHqypD
	}
		const _returnValuexbFGAAp = await detectUndirectedCycleUsingDisjointSet(_graphXPTQmIh)
	});
})
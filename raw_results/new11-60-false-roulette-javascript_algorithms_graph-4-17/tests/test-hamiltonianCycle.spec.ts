export {}
import hamiltonianCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/hamiltonian-cycle/hamiltonianCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('hamiltonianCycle', () => {
	it('test for hamiltonianCycle', async () => {
		const _returnValueMMNOOBm = "FCBYqMoHYGyBkLO8I3LybVGlp12gC4UjWACxjbAy6khDTxYfS6zBMYIIz7DS1v";
		const _graphAeCJKU5 = () => { return _returnValueMMNOOBm };
		const _returnValueelOGsmR = await hamiltonianCycle(_graphAeCJKU5)
	});

	it('test for hamiltonianCycle', async () => {
		const _returnValueXCH68nm = undefined;
		const _getVerticesIndicesD4r5I3e = () => { return _returnValueXCH68nm };
		const _arrayValueUxujWoC = null;
		const _returnValueaPm07iz = [_arrayValueUxujWoC]
		const _getAdjacencyMatrixjqMrZ20 = () => { return _returnValueaPm07iz };
		const _returnValuej5J8u1U = false;
		const _getAllVerticesvv7qB1D = () => { return _returnValuej5J8u1U };
		const _graphyur8EL = {
			"getVerticesIndices": _getVerticesIndicesD4r5I3e,
		"getAdjacencyMatrix": _getAdjacencyMatrixjqMrZ20,
		"getAllVertices": _getAllVerticesvv7qB1D
	}
		const _returnValuelTtVAfP = await hamiltonianCycle(_graphyur8EL)
	});

	it('test for hamiltonianCycle', async () => {
		const _isDirectedUALmWl4 = false;
		const _graphmzKPWIk = new Graph(_isDirectedUALmWl4)
		const _returnValueeTyjbOo = await _graphmzKPWIk.getAllVertices()
		const _returnValueL2uN1fS = await _graphmzKPWIk.getVerticesIndices()
		const _valueJBZ5soe = false;
		const _newVertexxmSUMEs = new GraphVertex(_valueJBZ5soe)
		const _requiredEdgeYYXRUwk = -8.465396389966905;
		const _returnValueGHwMsO8 = await _newVertexxmSUMEs.hasEdge(_requiredEdgeYYXRUwk)
		const _edgenV56L0a = -0.3441543917138006;
		const _returnValueRKzOUGl = await _newVertexxmSUMEs.deleteEdge(_edgenV56L0a)
		const _edgeHNkV1X8 = null;
		const _returnValuecEmNq38 = await _newVertexxmSUMEs.deleteEdge(_edgeHNkV1X8)
		const _returnValueIJO7qhl = await _graphmzKPWIk.addVertex(_newVertexxmSUMEs)
		const _returnValueAVmJLst = await hamiltonianCycle(_graphmzKPWIk)
	});
})
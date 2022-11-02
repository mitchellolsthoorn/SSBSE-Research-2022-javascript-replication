export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValuezuVbQ3s = 9.737390757007354;
		const _returnValuefnVMk5Z = [_arrayValuezuVbQ3s]
		const _getAllVerticesudgijW = () => { return _returnValuefnVMk5Z };
		const _graphU5rCXDP = {
			"getAllVertices": _getAllVerticesudgijW
	}
		const _returnValueEe5jFD7 = await detectDirectedCycle(_graphU5rCXDP)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectednbXGsmi = true;
		const _graphL1pfUF = new Graph(_isDirectednbXGsmi)
		const _returnValuemEXBL34 = await _graphL1pfUF.getAdjacencyMatrix()
		const _returnValueLSlxjaj = await _graphL1pfUF.getAdjacencyMatrix()
		const _returnValueEQ2tcn1 = await detectDirectedCycle(_graphL1pfUF)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedhyZGJQm = false;
		const _graphHwMvo9R = new Graph(_isDirectedhyZGJQm)
		const _returnValueklRrKu = await _graphHwMvo9R.getAllVertices()
		const _valuehMF7Ne2 = true;
		const _returnValueEIBrpB5 = null;
		const _keyCallbackBdyERe0 = () => { return _returnValueEIBrpB5 };
		const _newVertexESgpNgj = new DisjointSetItem(_valuehMF7Ne2, _keyCallbackBdyERe0)
		const _returnValueoKl7dp0 = await _newVertexESgpNgj.getChildren()
		const _returnValueIAk4vX5 = await _newVertexESgpNgj.getKey()
		const _returnValueaLShfIH = await _newVertexESgpNgj.isRoot()
		const _returnValueYAwPAz = await _graphHwMvo9R.addVertex(_newVertexESgpNgj)
		const _returnValueMcEuLVS = await _graphHwMvo9R.getWeight()
		const _returnValueZ0IEXhe = await _graphHwMvo9R.getVerticesIndices()
		const _returnValuelHHoD2v = await detectDirectedCycle(_graphHwMvo9R)
	});
})
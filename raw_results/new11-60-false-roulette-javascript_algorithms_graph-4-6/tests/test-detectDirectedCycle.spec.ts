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
		const _returnValueGpDcyJ7 = true;
		const _getAllVerticestQ5WVBW = () => { return _returnValueGpDcyJ7 };
		const _graphy78y2Lk = {
			"getAllVertices": _getAllVerticestQ5WVBW
	}
		const _returnValueCpL2w9t = await detectDirectedCycle(_graphy78y2Lk)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedUMzELII = true;
		const _graphvVD0uPO = new Graph(_isDirectedUMzELII)
		const _returnValueushfAp1 = await _graphvVD0uPO.getAdjacencyMatrix()
		const _returnValueruDUvWb = await detectDirectedCycle(_graphvVD0uPO)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedGb5vj7Q = false;
		const _graphA8aVwN = new Graph(_isDirectedGb5vj7Q)
		const _returnValueKB7q68B = await _graphA8aVwN.toString()
		const _valueF6EScYX = 4.286305785535923;
		const _arrayValuePzeNjK = null;
		const _arrayValueH0ccYJk = false;
		const _arrayValueKLRjINo = null;
		const _returnValueYHsxeHV = [_arrayValuePzeNjK, _arrayValueH0ccYJk, _arrayValueKLRjINo]
		const _keyCallbackQnVHJdT = () => { return _returnValueYHsxeHV };
		const _newVertexIlLUVJt = new DisjointSetItem(_valueF6EScYX, _keyCallbackQnVHJdT)
		const _returnValuekGQSPZv = await _newVertexIlLUVJt.getChildren()
		const _returnValuejphvlYa = await _newVertexIlLUVJt.isRoot()
		const _returnValuen6fqQRs = await _newVertexIlLUVJt.getRoot()
		const _returnValueow48leM = await _graphA8aVwN.addVertex(_newVertexIlLUVJt)
		const _returnValuepOMevjq = await _graphA8aVwN.getAllVertices()
		const _returnValuedTxjyFb = await _graphA8aVwN.getAllVertices()
		const _returnValueHPTcejP = await _graphA8aVwN.toString()
		const _returnValuerpwILK = await detectDirectedCycle(_graphA8aVwN)
	});
})
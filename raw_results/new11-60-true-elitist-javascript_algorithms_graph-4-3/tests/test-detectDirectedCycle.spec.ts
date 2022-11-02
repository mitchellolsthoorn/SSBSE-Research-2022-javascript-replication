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
		const _returnValueXZlBdXg = 7.076878618777165;
		const _getAllVerticesfZKF62 = () => { return _returnValueXZlBdXg };
		const _graphFr3L4g1 = {
			"getAllVertices": _getAllVerticesfZKF62
	}
		const _returnValuecw0DOia = await detectDirectedCycle(_graphFr3L4g1)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueLT7pCCF = []
		const _getAllVertices1LrztH = () => { return _returnValueLT7pCCF };
		const _graphXcWPcDj = {
			"getAllVertices": _getAllVertices1LrztH
	}
		const _returnValueVfU3IwG = await detectDirectedCycle(_graphXcWPcDj)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedS8dCFpm = false;
		const _graphti7wNL3 = new Graph(_isDirectedS8dCFpm)
		const _returnValueX8aPEtr = await _graphti7wNL3.getAllEdges()
		const _returnValueCYRUMvL = false;
		const _valuedqdFm4n = () => { return _returnValueCYRUMvL };
		const _returnValuevSXiVFp = undefined;
		const _keyCallbackl8D8Nme = () => { return _returnValuevSXiVFp };
		const _newVertexV13YauD = new DisjointSetItem(_valuedqdFm4n, _keyCallbackl8D8Nme)
		const _returnValued7KRvmP = await _newVertexV13YauD.isRoot()
		const _returnValueLYToqs = await _newVertexV13YauD.getChildren()
		const _returnValueTYlNWeP = await _newVertexV13YauD.isRoot()
		const _returnValue4o7yKT = await _newVertexV13YauD.getChildren()
		const _returnValuemsiMwVk = await _graphti7wNL3.addVertex(_newVertexV13YauD)
		const _returnValueifFZUgf = await detectDirectedCycle(_graphti7wNL3)
	});
})
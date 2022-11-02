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
		const _graphf9DfSkd = "dOJupOY253gQCsWB2mubT7HduBfBugLJKbSoVF5zinbfz9xHFNOd20ITHbzno";
		const _returnValuePpNXpdd = await detectDirectedCycle(_graphf9DfSkd)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedGliiYgg = false;
		const _graphqjvaazL = new Graph(_isDirectedGliiYgg)
		const _returnValueHR0cQS4 = await _graphqjvaazL.getWeight()
		const _returnValueIbOxePS = "4cXAOMrx31TTautsCDdS8ECLaKB7JOu1fsErMncY";
		const _getKeyS8WKonh = () => { return _returnValueIbOxePS };
		const _startVertexp6C1mfl = {
			"getKey": _getKeyS8WKonh
	}
		const _endVertexjyLaoB = "rWJKQRV6SuoVEBJP9nQXsVeoAWt7adahOlmwaO5rpzhgEblSx3wmG";
		const _returnValueRZvpjG = await _graphqjvaazL.findEdge(_startVertexp6C1mfl, _endVertexjyLaoB)
		const _returnValueKLXRto = await detectDirectedCycle(_graphqjvaazL)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedr2276mL = true;
		const _graphsoqW12n = new Graph(_isDirectedr2276mL)
		const _returnValueW6JTdw = await _graphsoqW12n.reverse()
		const _valueGdWSmoG = true;
		const _returnValuecI6ys8D = 8.249144784917483;
		const _keyCallbacklu73huB = () => { return _returnValuecI6ys8D };
		const _newVertexj8pGuo2 = new DisjointSetItem(_valueGdWSmoG, _keyCallbacklu73huB)
		const _returnValue7nCQB8 = await _newVertexj8pGuo2.isRoot()
		const _returnValueapHUYSj = await _newVertexj8pGuo2.getKey()
		const _returnValuerzPqD4F = await _newVertexj8pGuo2.getRoot()
		const _returnValue7ZyDPO = await _graphsoqW12n.addVertex(_newVertexj8pGuo2)
		const _returnValueKp547Xd = await _graphsoqW12n.getAllEdges()
		const _vertexKeyKLlaJv3 = undefined;
		const _returnValuefpp7URP = await _graphsoqW12n.getVertexByKey(_vertexKeyKLlaJv3)
		const _returnValuedfkjIDK = await detectDirectedCycle(_graphsoqW12n)
	});
})
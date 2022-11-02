export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueaqIqFrm = "HgeaLW4I86hanH";
		const _getAllVerticesMKUQUy6 = () => { return _returnValueaqIqFrm };
		const _returnValueeUbSqHW = -1.1419122240229065;
		const _findEdgeNUb9YJA = () => { return _returnValueeUbSqHW };
		const _graphbjYJVBQ = {
			"getAllVertices": _getAllVerticesMKUQUy6,
		"findEdge": _findEdgeNUb9YJA
	}
		const _returnValueB1vD7P7 = await graphBridges(_graphbjYJVBQ)
	});

	it('test for graphBridges', async () => {
		const _isDirectedsV0MlNk = true;
		const _graphBcc8eIA = new Graph(_isDirectedsV0MlNk)
		const _returnValueA7e57HK = true;
		const _getKeyyMLlr8O = () => { return _returnValueA7e57HK };
		const _startVertexoVJvcyi = {
			"getKey": _getKeyyMLlr8O
	}
		const _endVertexl5zyPht = "sS1KcSiS3DjbatFfVAV8ac4u2sG9UzcHtArXAB";
		const _returnValueSZhT08 = await _graphBcc8eIA.findEdge(_startVertexoVJvcyi, _endVertexl5zyPht)
		const _returnValueMl3vWv0 = await _graphBcc8eIA.getAllVertices()
		const _returnValuetRdh0e7 = await _graphBcc8eIA.getAllVertices()
		const _valueWI70BY5 = "tf0ScFyfywI1ACYD5bLbSSpQQb21Bbw";
		const _returnValuemTcJQJ7 = false;
		const _keyCallbackg1hZg9n = () => { return _returnValuemTcJQJ7 };
		const _newVertexLdE0t7 = new DisjointSetItem(_valueWI70BY5, _keyCallbackg1hZg9n)
		const _returnValuee6RTtZ = await _newVertexLdE0t7.getChildren()
		const _returnValuehEzzo7 = await _newVertexLdE0t7.getRoot()
		const _returnValueMCYmQT = await _newVertexLdE0t7.getRank()
		const _returnValues5HCVty = await _graphBcc8eIA.addVertex(_newVertexLdE0t7)
		const _returnValue9RpD9M = await graphBridges(_graphBcc8eIA)
	});
})
export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueih2aSSp = -3.5899487077968173;
		const _graphBeLZB1d = () => { return _returnValueih2aSSp };
		const _startVertexrpMq00g = "O6CC1i50UoCNgms7yA8PPa7jQbIlJGolvqDUvYSE7viybXsExXjFJJjO20EoWGJFtTdORO9pxHStK4QyXQhtpNgw3Lg1";
		const _returnValueeKqm0fn = await bellmanFord(_graphBeLZB1d, _startVertexrpMq00g)
	});

	it('test for bellmanFord', async () => {
		const _returnValuehT023Zn = "picQD4czD7Vku6XaJoD4pVWCSmJTo2LWF2zb5HS3JvRONAWVWGzHPP";
		const _graphMpIiTCd = () => { return _returnValuehT023Zn };
		const _returnValueuFcsXY1 = true;
		const _getKeyRSrkWk = () => { return _returnValueuFcsXY1 };
		const _startVertexFL0xE6v = {
			"getKey": _getKeyRSrkWk
	}
		const _returnValuenLsVYo9 = await bellmanFord(_graphMpIiTCd, _startVertexFL0xE6v)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedeRxME0t = false;
		const _graphBzVJ6O4 = new Graph(_isDirectedeRxME0t)
		const _vertexKeynBO7Jv = 9.555160836334558;
		const _returnValueFRtqSw0 = await _graphBzVJ6O4.getVertexByKey(_vertexKeynBO7Jv)
		const _returnValueTSB1PMz = await _graphBzVJ6O4.toString()
		const _returnValuejlM27b4 = await _graphBzVJ6O4.getAllVertices()
		const _returnValuei2ycDru = await _graphBzVJ6O4.getAdjacencyMatrix()
		const _returnValueflwoFOD = false;
		const _getKeykGvrHOG = () => { return _returnValueflwoFOD };
		const _startVertexLKSwEXF = {
			"getKey": _getKeykGvrHOG
	}
		const _returnValuei7QCW7j = await bellmanFord(_graphBzVJ6O4, _startVertexLKSwEXF)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedCAHNAWq = true;
		const _graphC9taP5N = new Graph(_isDirectedCAHNAWq)
		const _valueBqFgiYt = "bbh7OnIvnn2fnienlyX6pL5xMfuN";
		const _returnValuePEAOVN8 = "gQc0cmj8kmCvlsr1gQbQsO99GdeIrcyhfgMYPUfJr5XEFYNgMkwI49XkEuE4x4UUmfgKOWksjLnjre1C";
		const _keyCallbacklEM1f4Z = () => { return _returnValuePEAOVN8 };
		const _startVertexYDTOSla = new DisjointSetItem(_valueBqFgiYt, _keyCallbacklEM1f4Z)
		const _returnValuez9ZO14u = await _startVertexYDTOSla.isRoot()
		const _returnValuex9MVOJI = await _startVertexYDTOSla.getRank()
		const _returnValuezlHNmCn = "Iy8XjGNgGxF91hJM3k8mRp3UGt9liug4NDkw3";
		const _getKeyDF02zgc = () => { return _returnValuezlHNmCn };
		const _returnValueijSxAMH = true;
		const _setParentOymWIhA = () => { return _returnValueijSxAMH };
		const _childItemcoPXUK3 = {
			"getKey": _getKeyDF02zgc,
		"setParent": _setParentOymWIhA
	}
		const _returnValuen2dbw9v = await _startVertexYDTOSla.addChild(_childItemcoPXUK3)
		const _arrayValueso8eOqa = {
		
	}
		const _arrayValueAwKk87I = true;
		const _endVertexh3SjLac = [_arrayValueso8eOqa, _arrayValueAwKk87I]
		const _returnValueYdMMo0K = await _graphC9taP5N.findEdge(_startVertexYDTOSla, _endVertexh3SjLac)
		const _valuekB7mm5F = "kzfv1DANF";
		const _returnValueC8i88LM = undefined;
		const _keyCallbackkHctSf7 = () => { return _returnValueC8i88LM };
		const _newVertexMjgy80t = new DisjointSetItem(_valuekB7mm5F, _keyCallbackkHctSf7)
		const _returnValuegHQimcA = await _newVertexMjgy80t.getRoot()
		const _returnValueGhOWZVc = await _graphC9taP5N.addVertex(_newVertexMjgy80t)
		const _returnValueC51lQYJ = "V25jWFRLbvX64foNfVimC20EatW1Lcoc3fz8Cz2jybYTe41zYamiaSLNEOtweWhgpWmH6aor9IfWH5fF";
		const _getKeyPMxZRev = () => { return _returnValueC51lQYJ };
		const _startVertexbwqJR2Y = {
			"getKey": _getKeyPMxZRev
	}
		const _returnValuet5XLeRQ = await bellmanFord(_graphC9taP5N, _startVertexbwqJR2Y)
	});
})
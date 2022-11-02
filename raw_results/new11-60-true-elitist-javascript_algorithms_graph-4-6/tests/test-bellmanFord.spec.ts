export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuecKy7La = "3WUiCimHJ1LjFGOvlcmSkO89sXUMYDWZOauMW";
		const _getAllVerticesqrQEbYE = () => { return _returnValuecKy7La };
		const _returnValuehvmYbnJ = "Uo7VbrwkyyWRKYtLzqWTLS6osNmQiWvVxPwH0oWgPbkCoV90nw1V4PNzJpbup";
		const _getVertexByKeyzT8ZadV = () => { return _returnValuehvmYbnJ };
		const _returnValueWRoaNr = false;
		const _getNeighborsHtQLoOq = () => { return _returnValueWRoaNr };
		const _returnValueUZC6uSq = false;
		const _findEdgeEl3biNE = () => { return _returnValueUZC6uSq };
		const _graphMm9hs7L = {
			"getAllVertices": _getAllVerticesqrQEbYE,
		"getVertexByKey": _getVertexByKeyzT8ZadV,
		"getNeighbors": _getNeighborsHtQLoOq,
		"findEdge": _findEdgeEl3biNE
	}
		const _returnValuernywTI3 = false;
		const _getKeytavpkTd = () => { return _returnValuernywTI3 };
		const _startVertexBR1pz5 = {
			"getKey": _getKeytavpkTd
	}
		const _returnValue8GuqWe = await bellmanFord(_graphMm9hs7L, _startVertexBR1pz5)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedj07kXXp = false;
		const _graphohX3DNB = new Graph(_isDirectedj07kXXp)
		const _returnValuesZBrTen = await _graphohX3DNB.getWeight()
		const _returnValueTlNqIcx = await _graphohX3DNB.getWeight()
		const _returnValueZpE85sF = null;
		const _getKeyzOi6JaZ = () => { return _returnValueZpE85sF };
		const _startVertexIznkz9B = {
			"getKey": _getKeyzOi6JaZ
	}
		const _returnValueGRTSp0O = await bellmanFord(_graphohX3DNB, _startVertexIznkz9B)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedop7mBkm = false;
		const _graphej8nh7b = new Graph(_isDirectedop7mBkm)
		const _returnValuezEPrRrg = await _graphej8nh7b.getVerticesIndices()
		const _returnValueDUIFfXx = await _graphej8nh7b.reverse()
		const _returnValuerxNzcRC = null;
		const _getKeynFerJUN = () => { return _returnValuerxNzcRC };
		const _newVertexnOIHbMv = {
			"getKey": _getKeynFerJUN
	}
		const _returnValueJeJsdNy = await _graphej8nh7b.addVertex(_newVertexnOIHbMv)
		const _returnValueknEcJl6 = await _graphej8nh7b.getWeight()
		const _returnValueOCOT1Xz = null;
		const _getKeyoULE6cj = () => { return _returnValueOCOT1Xz };
		const _startVertexiBWRE09 = {
			"getKey": _getKeyoULE6cj
	}
		const _returnValueLHHx4Ym = await bellmanFord(_graphej8nh7b, _startVertexiBWRE09)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedKbCmgr = true;
		const _graphVIAjjSg = new Graph(_isDirectedKbCmgr)
		const _arrayValuerRzS0C = "58iv1LS9LQWxTR";
		const _arrayValuegHWtU42 = []
		const _returnValueRvktCb4 = [_arrayValuerRzS0C, _arrayValuegHWtU42]
		const _returnValueZX0out = () => { return _returnValueRvktCb4 };
		const _getKeyDhnXKC5 = () => { return _returnValueZX0out };
		const _newVertexOkCw9C = {
			"getKey": _getKeyDhnXKC5
	}
		const _returnValueSDISn7a = await _graphVIAjjSg.addVertex(_newVertexOkCw9C)
		const _valuePziX3u0 = null;
		const _startVertexraxR9RG = new GraphVertex(_valuePziX3u0)
		const _edgerFH6Zyy = -9.886442891825594;
		const _returnValuezsVRTzG = await _startVertexraxR9RG.addEdge(_edgerFH6Zyy)
		const _returnValueZApAAsP = await _startVertexraxR9RG.getKey()
		const _returnValue9sBAhF = await bellmanFord(_graphVIAjjSg, _startVertexraxR9RG)
	});
})
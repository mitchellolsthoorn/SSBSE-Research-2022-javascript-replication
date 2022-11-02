export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuesOv5gg0 = false;
		const _getAllVerticesWHyOicY = () => { return _returnValuesOv5gg0 };
		const _returnValueuqE3rnc = true;
		const _findEdgesbwRjNa = () => { return _returnValueuqE3rnc };
		const _graphP9TkQ6Z = {
			"getAllVertices": _getAllVerticesWHyOicY,
		"findEdge": _findEdgesbwRjNa
	}
		const _returnValueZOkQ6Ya = {
		
	}
		const _getKeyT7oVObZ = () => { return _returnValueZOkQ6Ya };
		const _startVertexLlkNhOt = {
			"getKey": _getKeyT7oVObZ
	}
		const _returnValueG4wMLlT = await dijkstra(_graphP9TkQ6Z, _startVertexLlkNhOt)
	});

	it('test for dijkstra', async () => {
		const _returnValuemSBKVwQ = []
		const _getAllVerticesBN2s7ty = () => { return _returnValuemSBKVwQ };
		const _returnValueG2alHvP = "t3D65P4iT2B82DGJxDYNW0N1tB7xlSTDX9Ld9GiCc9888NEgCZfs8Jr";
		const _findEdgeXBp6ua = () => { return _returnValueG2alHvP };
		const _graphOLHyfDB = {
			"getAllVertices": _getAllVerticesBN2s7ty,
		"findEdge": _findEdgeXBp6ua
	}
		const _arrayValuePkVN82k = 6.180839881465182;
		const _arrayValuexXnuzTj = -4.474792268525494;
		const _arrayValue8MVTgL = [_arrayValuePkVN82k, _arrayValuexXnuzTj]
		const _arrayValued0sWnjR = null;
		const _arrayValuecepXV7W = []
		const _returnValueNagr0Tj = [_arrayValue8MVTgL, _arrayValued0sWnjR, _arrayValuecepXV7W]
		const _arrayValueApsrPs0 = () => { return _returnValueNagr0Tj };
		const _returnValue6C1kjf = [_arrayValueApsrPs0]
		const _getKeyVUFRVHD = () => { return _returnValue6C1kjf };
		const _startVertexQ3y9xGV = {
			"getKey": _getKeyVUFRVHD
	}
		const _returnValueKFUax6S = await dijkstra(_graphOLHyfDB, _startVertexQ3y9xGV)
	});
})
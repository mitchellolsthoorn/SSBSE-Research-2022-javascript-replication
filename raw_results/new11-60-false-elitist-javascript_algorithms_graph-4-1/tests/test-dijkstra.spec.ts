export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueYl1fozT = null;
		const _getAllVerticesro2gh3t = () => { return _returnValueYl1fozT };
		const _returnValuekzdluN = null;
		const _findEdgeVULw8jz = () => { return _returnValuekzdluN };
		const _graphiKRkOvB = {
			"getAllVertices": _getAllVerticesro2gh3t,
		"findEdge": _findEdgeVULw8jz
	}
		const _returnValueUL2wpqx = {
		
	}
		const _getKeyzokuUxw = () => { return _returnValueUL2wpqx };
		const _startVertexedfl3HV = {
			"getKey": _getKeyzokuUxw
	}
		const _returnValueASeqiA3 = await dijkstra(_graphiKRkOvB, _startVertexedfl3HV)
	});

	it('test for dijkstra', async () => {
		const _returnValueAuMzEb9 = []
		const _getAllVerticesso3Nsnl = () => { return _returnValueAuMzEb9 };
		const _returnValueFdWOg0 = false;
		const _findEdgep5PoGa2 = () => { return _returnValueFdWOg0 };
		const _graphao8Z6Yb = {
			"getAllVertices": _getAllVerticesso3Nsnl,
		"findEdge": _findEdgep5PoGa2
	}
		const _arrayValuelDsD6vI = undefined;
		const _returnValueThkZBBZ = [_arrayValuelDsD6vI]
		const _getKeyP8EMqTI = () => { return _returnValueThkZBBZ };
		const _startVertexZUAagRm = {
			"getKey": _getKeyP8EMqTI
	}
		const _returnValueTPEFi0r = await dijkstra(_graphao8Z6Yb, _startVertexZUAagRm)
	});
})
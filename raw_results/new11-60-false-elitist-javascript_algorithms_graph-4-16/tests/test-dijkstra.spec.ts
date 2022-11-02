export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValuekzWjrFC = 4.622884622757432;
		const _getAllVerticesKvr439Z = () => { return _returnValuekzWjrFC };
		const _returnValuejMcfl6i = false;
		const _findEdgewHOZ02j = () => { return _returnValuejMcfl6i };
		const _graphrOM8e59 = {
			"getAllVertices": _getAllVerticesKvr439Z,
		"findEdge": _findEdgewHOZ02j
	}
		const _arrayValuexzzrCup = undefined;
		const _returnValuenCbrGdo = [_arrayValuexzzrCup]
		const _getKeytLumOny = () => { return _returnValuenCbrGdo };
		const _startVertexqXxRDf8 = {
			"getKey": _getKeytLumOny
	}
		const _returnValuecfqMOaq = await dijkstra(_graphrOM8e59, _startVertexqXxRDf8)
	});

	it('test for dijkstra', async () => {
		const _returnValueDeC3Zao = []
		const _getAllVerticesJ2p8pjD = () => { return _returnValueDeC3Zao };
		const _returnValueU77BsMs = {
		
	}
		const _findEdgeMK01p1 = () => { return _returnValueU77BsMs };
		const _graphDB7CKtx = {
			"getAllVertices": _getAllVerticesJ2p8pjD,
		"findEdge": _findEdgeMK01p1
	}
		const _returnValuetnaaruQ = null;
		const _getKeyxlcaHDF = () => { return _returnValuetnaaruQ };
		const _startVertexnqlSnO = {
			"getKey": _getKeyxlcaHDF
	}
		const _returnValuebP3s8fp = await dijkstra(_graphDB7CKtx, _startVertexnqlSnO)
	});
})
export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueOcotFlv = null;
		const _getAllVerticesTyAkeCE = () => { return _returnValueOcotFlv };
		const _arrayValueo9sPA4n = null;
		const _returnValueWKercT6 = [_arrayValueo9sPA4n]
		const _getVertexByKeyiJZcfo = () => { return _returnValueWKercT6 };
		const _returnValuefW30FeR = undefined;
		const _getNeighborss1kTbbS = () => { return _returnValuefW30FeR };
		const _arrayValueVfsAgaY = "";
		const _arrayValuewNtyhNq = null;
		const _returnValueN8wMPb0 = [_arrayValueVfsAgaY, _arrayValuewNtyhNq]
		const _findEdgeaLRfevg = () => { return _returnValueN8wMPb0 };
		const _graphYFAOyNN = {
			"getAllVertices": _getAllVerticesTyAkeCE,
		"getVertexByKey": _getVertexByKeyiJZcfo,
		"getNeighbors": _getNeighborss1kTbbS,
		"findEdge": _findEdgeaLRfevg
	}
		const _returnValueJ4F0Z2c = null;
		const _returnValueU2kpJc = () => { return _returnValueJ4F0Z2c };
		const _getKeyUVo0ke = () => { return _returnValueU2kpJc };
		const _startVertexhCDRUJd = {
			"getKey": _getKeyUVo0ke
	}
		const _returnValueUPXtxh2 = await bellmanFord(_graphYFAOyNN, _startVertexhCDRUJd)
	});

	it('test for bellmanFord', async () => {
		const _returnValuepOugNU = []
		const _getAllVerticesbBQ3xa1 = () => { return _returnValuepOugNU };
		const _getVertexByKeyH0gmdht = "ulDJ84cavV2d";
		const _returnValueoPQ4jct = null;
		const _returnValueAid2bb = () => { return _returnValueoPQ4jct };
		const _getNeighborseQngW2 = () => { return _returnValueAid2bb };
		const _returnValueQ1BnRAZ = undefined;
		const _findEdgeyj3dSfM = () => { return _returnValueQ1BnRAZ };
		const _graphpxjhccy = {
			"getAllVertices": _getAllVerticesbBQ3xa1,
		"getVertexByKey": _getVertexByKeyH0gmdht,
		"getNeighbors": _getNeighborseQngW2,
		"findEdge": _findEdgeyj3dSfM
	}
		const _returnValueC6CXKFi = {
		
	}
		const _getKeyk1GBs8 = () => { return _returnValueC6CXKFi };
		const _startVertexwGEXlyN = {
			"getKey": _getKeyk1GBs8
	}
		const _returnValuezHxo8z = await bellmanFord(_graphpxjhccy, _startVertexwGEXlyN)
	});
})
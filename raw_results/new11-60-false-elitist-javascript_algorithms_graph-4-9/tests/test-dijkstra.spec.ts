export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValue2hU15y = {
		
	}
		const _getAllVerticesepx49PQ = () => { return _returnValue2hU15y };
		const _returnValueiGMf65f = "BY39MNr5paCk2e8PDOBatiaoeM9MIlXbPML8AATGn5";
		const _findEdgeFIdlzG1 = () => { return _returnValueiGMf65f };
		const _graphPoKV2Rq = {
			"getAllVertices": _getAllVerticesepx49PQ,
		"findEdge": _findEdgeFIdlzG1
	}
		const _returnValueehPQPPF = []
		const _getKeymmhs4hE = () => { return _returnValueehPQPPF };
		const _startVertexdSUTBbI = {
			"getKey": _getKeymmhs4hE
	}
		const _returnValueKFiIIE3 = await dijkstra(_graphPoKV2Rq, _startVertexdSUTBbI)
	});

	it('test for dijkstra', async () => {
		const _returnValuezVW21du = []
		const _getAllVerticesIbV0Jay = () => { return _returnValuezVW21du };
		const _returnValueLvCw0xd = null;
		const _findEdgeTkLptD0 = () => { return _returnValueLvCw0xd };
		const _graphdGzM9Zm = {
			"getAllVertices": _getAllVerticesIbV0Jay,
		"findEdge": _findEdgeTkLptD0
	}
		const _returnValueHJQjGvA = undefined;
		const _getKeyZPyoHfg = () => { return _returnValueHJQjGvA };
		const _startVertexBHBN4z8 = {
			"getKey": _getKeyZPyoHfg
	}
		const _returnValueD78tVEp = await dijkstra(_graphdGzM9Zm, _startVertexBHBN4z8)
	});
})
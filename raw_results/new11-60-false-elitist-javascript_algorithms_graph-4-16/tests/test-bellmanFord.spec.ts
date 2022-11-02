export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuetHck3fo = "2h9VER9oYiWBCpt7vdn";
		const _getAllVerticesgy9N5UR = () => { return _returnValuetHck3fo };
		const _returnValue6UWoDB = "absn8ccQ7xIrdMq5ScG";
		const _getVertexByKeySAFeZx = () => { return _returnValue6UWoDB };
		const _returnValuestfYEgW = -4.694338943347013;
		const _getNeighborsoxg0X5 = () => { return _returnValuestfYEgW };
		const _returnValuec5H83zx = {
		
	}
		const _findEdgeENucNAd = () => { return _returnValuec5H83zx };
		const _graphoC1Eu3E = {
			"getAllVertices": _getAllVerticesgy9N5UR,
		"getVertexByKey": _getVertexByKeySAFeZx,
		"getNeighbors": _getNeighborsoxg0X5,
		"findEdge": _findEdgeENucNAd
	}
		const _returnValueCpzfnAo = null;
		const _getKey4A9I8e = () => { return _returnValueCpzfnAo };
		const _startVertexy4v3F4Y = {
			"getKey": _getKey4A9I8e
	}
		const _returnValueYOYxfbf = await bellmanFord(_graphoC1Eu3E, _startVertexy4v3F4Y)
	});

	it('test for bellmanFord', async () => {
		const _returnValueeanjb9w = []
		const _getAllVerticesAsJI7gs = () => { return _returnValueeanjb9w };
		const _returnValuekp2aZtO = null;
		const _getVertexByKeys9OqfRT = () => { return _returnValuekp2aZtO };
		const _returnValueqJKZisB = 4.860144481667522;
		const _getNeighborsjugzVfp = () => { return _returnValueqJKZisB };
		const _returnValuepqlcuxx = false;
		const _findEdgePUtdNkR = () => { return _returnValuepqlcuxx };
		const _graphPz4k6te = {
			"getAllVertices": _getAllVerticesAsJI7gs,
		"getVertexByKey": _getVertexByKeys9OqfRT,
		"getNeighbors": _getNeighborsjugzVfp,
		"findEdge": _findEdgePUtdNkR
	}
		const _arrayValueTmNqdEZ = false;
		const _returnValuetNs8Bp = [_arrayValueTmNqdEZ]
		const _getKeyky1A9DA = () => { return _returnValuetNs8Bp };
		const _startVertexBr7BZvp = {
			"getKey": _getKeyky1A9DA
	}
		const _returnValueJDr3Rds = await bellmanFord(_graphPz4k6te, _startVertexBr7BZvp)
	});
})
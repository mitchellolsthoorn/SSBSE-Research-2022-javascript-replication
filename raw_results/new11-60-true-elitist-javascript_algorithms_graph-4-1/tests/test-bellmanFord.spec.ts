export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueVLyleMF = false;
		const _getAllVerticesHKpmP2L = () => { return _returnValueVLyleMF };
		const _arrayValuevGiJly1 = -9.631784175687187;
		const _returnValuetN6jeKA = [_arrayValuevGiJly1]
		const _getVertexByKeyJAkNOnO = () => { return _returnValuetN6jeKA };
		const _returnValueLVTMrv = null;
		const _getNeighborsT7wQCu4 = () => { return _returnValueLVTMrv };
		const _arrayValueI82VnKU = 3.989515518524474;
		const _returnValuenUFGEYy = [_arrayValueI82VnKU]
		const _findEdgePRkFjk = () => { return _returnValuenUFGEYy };
		const _graphvfro8dZ = {
			"getAllVertices": _getAllVerticesHKpmP2L,
		"getVertexByKey": _getVertexByKeyJAkNOnO,
		"getNeighbors": _getNeighborsT7wQCu4,
		"findEdge": _findEdgePRkFjk
	}
		const _returnValueEuyGHEz = true;
		const _getKeyE94dTIG = () => { return _returnValueEuyGHEz };
		const _startVertexTPglEaq = {
			"getKey": _getKeyE94dTIG
	}
		const _returnValueiPHwuk = await bellmanFord(_graphvfro8dZ, _startVertexTPglEaq)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedpt3ghGQ = true;
		const _graphLr3qcvI = new Graph(_isDirectedpt3ghGQ)
		const _arrayValueE3Gv5Av = "6tqjZR1A69Q3vo66fP";
		const _vertexKeyyAL2ECD = [_arrayValueE3Gv5Av]
		const _returnValueZasX8qx = await _graphLr3qcvI.getVertexByKey(_vertexKeyyAL2ECD)
		const _returnValueHwNkT5F = await _graphLr3qcvI.reverse()
		const _returnValueXp3nxIo = -6.886859974472335;
		const _getKeysEB3CEq = () => { return _returnValueXp3nxIo };
		const _startVertexUOaEPp = {
			"getKey": _getKeysEB3CEq
	}
		const _returnValuehHRfRre = await bellmanFord(_graphLr3qcvI, _startVertexUOaEPp)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedL7ZyqMI = true;
		const _graphfUKc0n = new Graph(_isDirectedL7ZyqMI)
		const _returnValueJTWdPcF = await _graphfUKc0n.getWeight()
		const _returnValueOHeEFpw = await _graphfUKc0n.getAdjacencyMatrix()
		const _returnValueimRztv = -3.1172489026434995;
		const _getKeycyQjsdh = () => { return _returnValueimRztv };
		const _newVertexYU8rTv6 = {
			"getKey": _getKeycyQjsdh
	}
		const _returnValueswDOYX7 = await _graphfUKc0n.addVertex(_newVertexYU8rTv6)
		const _returnValueKgBhbYh = await _graphfUKc0n.getWeight()
		const _returnValueULpjRXl = null;
		const _getKeyA6cX8mx = () => { return _returnValueULpjRXl };
		const _startVertexamKiAFq = {
			"getKey": _getKeyA6cX8mx
	}
		const _returnValuespQsGmI = await bellmanFord(_graphfUKc0n, _startVertexamKiAFq)
	});
})
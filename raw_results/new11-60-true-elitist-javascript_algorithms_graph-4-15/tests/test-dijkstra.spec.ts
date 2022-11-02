export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _returnValueM8sIiv9 = undefined;
		const _getAllVerticesGN1knUX = () => { return _returnValueM8sIiv9 };
		const _returnValueF2PMnk = "CNBD1Vbde8XRCmgehhtSCYEkfbu1NiuOaAWwHHHtpnfk6trhIg6nGnQoJIUxYZ14fSe59Xhpjlqlc56O8SCqhbgNQLC";
		const _findEdgep2oU0BM = () => { return _returnValueF2PMnk };
		const _graphcqMM1JC = {
			"getAllVertices": _getAllVerticesGN1knUX,
		"findEdge": _findEdgep2oU0BM
	}
		const _getKeyOxYrGxm = null;
		const _startVertexRy1BTn9 = {
			"getKey": _getKeyOxYrGxm
	}
		const _returnValuebs7Pzl = await dijkstra(_graphcqMM1JC, _startVertexRy1BTn9)
	});

	it('test for dijkstra', async () => {
		const _isDirectedC2W4VxI = true;
		const _graphAFqDuSE = new Graph(_isDirectedC2W4VxI)
		const _returnValuekyqqKaf = await _graphAFqDuSE.getAdjacencyMatrix()
		const _returnValueWMX6SCk = "mQinL9y1AYQAx9n8";
		const _getNeighborsCxDm67i = () => { return _returnValueWMX6SCk };
		const _vertexbkVgkbs = {
			"getNeighbors": _getNeighborsCxDm67i
	}
		const _returnValuek09eZfa = await _graphAFqDuSE.getNeighbors(_vertexbkVgkbs)
		const _arrayValueMm4maLb = null;
		const _returnValueENPmSK = {
		
	}
		const _arrayValuehNbfQEg = () => { return _returnValueENPmSK };
		const _returnValueNvAugK = [_arrayValueMm4maLb, _arrayValuehNbfQEg]
		const _getNeighborsfsNr3L = () => { return _returnValueNvAugK };
		const _vertexeI5JGrH = {
			"getNeighbors": _getNeighborsfsNr3L
	}
		const _returnValuezmpzSsj = await _graphAFqDuSE.getNeighbors(_vertexeI5JGrH)
		const _returnValuebWtutC1 = null;
		const _getNeighborse7ePMz = () => { return _returnValuebWtutC1 };
		const _vertexmJEUsa = {
			"getNeighbors": _getNeighborse7ePMz
	}
		const _returnValues8iKRF9 = await _graphAFqDuSE.getNeighbors(_vertexmJEUsa)
		const _returnValueHVYu5l7 = await _graphAFqDuSE.reverse()
		const _returnValuedkVUm7u = -2.6948489278782777;
		const _getKeyFUuHxsP = () => { return _returnValuedkVUm7u };
		const _startVertexLT2Ln12 = {
			"getKey": _getKeyFUuHxsP
	}
		const _returnValuev41jUmO = await dijkstra(_graphAFqDuSE, _startVertexLT2Ln12)
	});

	it('test for dijkstra', async () => {
		const _isDirectedk8sitaU = true;
		const _graphMj3b8RX = new Graph(_isDirectedk8sitaU)
		const _returnValuebz58SWK = await _graphMj3b8RX.getVerticesIndices()
		const _returnValuel2qAZGS = undefined;
		const _getNeighborsVpvTX9a = () => { return _returnValuel2qAZGS };
		const _vertexlePYANX = {
			"getNeighbors": _getNeighborsVpvTX9a
	}
		const _returnValuefvdOnQH = await _graphMj3b8RX.getNeighbors(_vertexlePYANX)
		const _valueoVaMSHs = false;
		const _startVertexDUoO4Wc = new GraphVertex(_valueoVaMSHs)
		const _arrayValuetXsgt4u = {
		
	}
		const _returnValuewJaqO7F = 7.140240439832805;
		const _arrayValuehTrmgz = () => { return _returnValuewJaqO7F };
		const _arrayValuep8GRsF2 = 6.422753413577052;
		const _vertexWIbTs9N = [_arrayValuetXsgt4u, _arrayValuehTrmgz, _arrayValuep8GRsF2]
		const _returnValueVJhiCE4 = await _startVertexDUoO4Wc.findEdge(_vertexWIbTs9N)
		const _vertexIDyYYJK = {
		
	}
		const _returnValueOqea9Rj = await _startVertexDUoO4Wc.findEdge(_vertexIDyYYJK)
		const _requiredEdgexXLos4i = null;
		const _returnValuefO0gTu = await _startVertexDUoO4Wc.hasEdge(_requiredEdgexXLos4i)
		const _returnValueH756VRl = await dijkstra(_graphMj3b8RX, _startVertexDUoO4Wc)
	});
})
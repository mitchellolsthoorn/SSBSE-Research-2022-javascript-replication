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
		const _returnValueXQbUnWs = "gf5iz27l9MknIyDueHEtFInQJp";
		const _getAllVerticesSPVVAIn = () => { return _returnValueXQbUnWs };
		const _returnValueiyrLDPp = null;
		const _findEdgeUb3YMCP = () => { return _returnValueiyrLDPp };
		const _graphPo4nflb = {
			"getAllVertices": _getAllVerticesSPVVAIn,
		"findEdge": _findEdgeUb3YMCP
	}
		const _returnValueLzMy1wv = null;
		const _getKeyZWGXeZU = () => { return _returnValueLzMy1wv };
		const _startVertexpQlzymS = {
			"getKey": _getKeyZWGXeZU
	}
		const _returnValueUECOpxb = await dijkstra(_graphPo4nflb, _startVertexpQlzymS)
	});

	it('test for dijkstra', async () => {
		const _isDirectedb3GzRU = false;
		const _graphF3I0PC = new Graph(_isDirectedb3GzRU)
		const _returnValueDEhMAiU = await _graphF3I0PC.getVerticesIndices()
		const _returnValuewEn7SYf = await _graphF3I0PC.getAllVertices()
		const _returnValueTk3n5Lz = "falQrLiGcHeuw0yzXxwAXJ62yttX8XnIWohewDK8o4TOFbrOWc3LXGnGDB8q8xe9";
		const _getKeymXYxyWQ = () => { return _returnValueTk3n5Lz };
		const _startVertexxGCKj2 = {
			"getKey": _getKeymXYxyWQ
	}
		const _returnValueSMdP1GQ = await dijkstra(_graphF3I0PC, _startVertexxGCKj2)
	});

	it('test for dijkstra', async () => {
		const _isDirectedLwpmEKz = false;
		const _graphLq7djy = new Graph(_isDirectedLwpmEKz)
		const _returnValueSDu9Mg = await _graphLq7djy.reverse()
		const _returnValuePmZ53DB = await _graphLq7djy.getVerticesIndices()
		const _vertexKeySVdpALo = undefined;
		const _returnValuekW0wJ5D = await _graphLq7djy.getVertexByKey(_vertexKeySVdpALo)
		const _vertexKeydzPpaU = true;
		const _returnValueuRMCwrb = await _graphLq7djy.getVertexByKey(_vertexKeydzPpaU)
		const _valuercElB5a = "EU05VxkpvQmmW0AnDkKHI20qs";
		const _startVertexVG1VZR = new GraphVertex(_valuercElB5a)
		const _returnValueGPRq4ZG = await _startVertexVG1VZR.deleteAllEdges()
		const _vertexPXZnxaZ = -6.198064481002918;
		const _returnValueANOIdAZ = await _startVertexVG1VZR.hasNeighbor(_vertexPXZnxaZ)
		const _edgepNn1CIT = false;
		const _returnValuegLO6rwS = await _startVertexVG1VZR.addEdge(_edgepNn1CIT)
		const _returnValueNwJ867V = await _startVertexVG1VZR.getEdges()
		const _returnValuezddK3LT = await dijkstra(_graphLq7djy, _startVertexVG1VZR)
	});

	it('test for dijkstra', async () => {
		const _isDirectedKxGh0Gj = false;
		const _graphsk0TKvz = new Graph(_isDirectedKxGh0Gj)
		const _vertexKeycJC6Za = true;
		const _returnValueRymEhIZ = await _graphsk0TKvz.getVertexByKey(_vertexKeycJC6Za)
		const _returnValuej96cOT6 = await _graphsk0TKvz.getAllEdges()
		const _returnValueT083NFs = await _graphsk0TKvz.getAllEdges()
		const _arrayValuelqi1cGq = undefined;
		const _valueeOPTvio = [_arrayValuelqi1cGq]
		const _startVertexOhWNRmN = new GraphVertex(_valueeOPTvio)
		const _vertexULpr8Qt = null;
		const _returnValueaJ5zs0 = await _startVertexOhWNRmN.findEdge(_vertexULpr8Qt)
		const _returnValueLPl5h0 = await _startVertexOhWNRmN.deleteAllEdges()
		const _vertexrVWhNOm = -1.7610256953039176;
		const _returnValueDwkwW6 = await _startVertexOhWNRmN.hasNeighbor(_vertexrVWhNOm)
		const _returnValueaLpVLMJ = await dijkstra(_graphsk0TKvz, _startVertexOhWNRmN)
	});
})
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
		const _returnValuebF2adjr = null;
		const _getAllVerticesIzrAiPk = () => { return _returnValuebF2adjr };
		const _returnValuerVbSx2W = undefined;
		const _findEdgeVP18NTC = () => { return _returnValuerVbSx2W };
		const _graphkEYO1i = {
			"getAllVertices": _getAllVerticesIzrAiPk,
		"findEdge": _findEdgeVP18NTC
	}
		const _startVertexxBxSIJS = "AHKoMER6TqEggcPczJu6Mu822c2zCa7uD8yfnX1DunFmHaeXEa7jGOrCbqHbRwhvfumt";
		const _returnValuecnLbgOl = await dijkstra(_graphkEYO1i, _startVertexxBxSIJS)
	});

	it('test for dijkstra', async () => {
		const _isDirectedyCtzzNJ = true;
		const _graph4q3XOR = new Graph(_isDirectedyCtzzNJ)
		const _returnValueFZKQZor = await _graph4q3XOR.reverse()
		const _returnValuejrpwDDr = await _graph4q3XOR.getWeight()
		const _returnValue2cXO5G = await _graph4q3XOR.getWeight()
		const _returnValueEC1tLyl = null;
		const _getKeyq2GoH2l = () => { return _returnValueEC1tLyl };
		const _startVertexKTQCcaD = {
			"getKey": _getKeyq2GoH2l
	}
		const _returnValuePltYWE5 = await dijkstra(_graph4q3XOR, _startVertexKTQCcaD)
	});

	it('test for dijkstra', async () => {
		const _isDirectedOxnazKN = true;
		const _graphNNsW3ok = new Graph(_isDirectedOxnazKN)
		const _vertexKeyNIMa48L = undefined;
		const _returnValueSgelsCz = await _graphNNsW3ok.getVertexByKey(_vertexKeyNIMa48L)
		const _valueZkrSIHA = "vMMahWlOyAGvSBky4eOE4Ij6qR1pHSrrTbuJzMrWvgvNRjBW63zP6uo7";
		const _startVertexRqYrcdw = new GraphVertex(_valueZkrSIHA)
		const _requiredEdgeHN4cH1I = "VQS";
		const _returnValuerh2Cl92 = await _startVertexRqYrcdw.hasEdge(_requiredEdgeHN4cH1I)
		const _requiredEdgeCLpEwib = {
		
	}
		const _returnValueMQxvwK1 = await _startVertexRqYrcdw.hasEdge(_requiredEdgeCLpEwib)
		const _returnValuehRrItKR = await dijkstra(_graphNNsW3ok, _startVertexRqYrcdw)
	});

	it('test for dijkstra', async () => {
		const _isDirectedOHcMh6h = false;
		const _graphbHcBQoI = new Graph(_isDirectedOHcMh6h)
		const _returnValue8bQqB9 = await _graphbHcBQoI.reverse()
		const _returnValueJOMbrFA = "32ihjAMqtpv6bVJeBuC5NUPQ8AVvX";
		const _valuegd0spJR = () => { return _returnValueJOMbrFA };
		const _startVertexJDNqwjr = new GraphVertex(_valuegd0spJR)
		const _edge13sQ8J = "6xmfxLgQwMH62Pw412AoFJQHLVMYQ8aRlJLVGuzfp3nVoncXTxUy9aa8g0lKvN1KmOeiVmPaWHzqef";
		const _returnValueSdqg2EU = await _startVertexJDNqwjr.deleteEdge(_edge13sQ8J)
		const _edgejlQbiAK = null;
		const _returnValuemohJgtx = await _startVertexJDNqwjr.deleteEdge(_edgejlQbiAK)
		const _returnValuejDUB3nI = await _startVertexJDNqwjr.getKey()
		const _edgex79E8s = "ZMcmQfXHtvT6mW9SJy1yGIvJAsNZS52Fry75Z8s7EiSO1bJxbS9QrEGOSGv9ojie8MQkERMchBz3HmbnLx5MdApO6W";
		const _returnValuePFM0GId = await _startVertexJDNqwjr.addEdge(_edgex79E8s)
		const _vertexiytmeVe = undefined;
		const _returnValuefr9HK2i = await _startVertexJDNqwjr.hasNeighbor(_vertexiytmeVe)
		const _returnValueE6OrONj = await dijkstra(_graphbHcBQoI, _startVertexJDNqwjr)
	});
})
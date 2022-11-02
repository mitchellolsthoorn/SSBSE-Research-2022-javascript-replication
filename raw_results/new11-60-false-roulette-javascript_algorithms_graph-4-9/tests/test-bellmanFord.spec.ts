export {}
import GraphEdge from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphPkZL2YZ = "s1N1ep0y5JrDPIXo";
		const _startVertexAfh9Vkc = {
		
	}
		const _endVertexD9jeNts = {
		
	}
		const _weightCTqnYn6 = undefined;
		const _startVertexb52YEtF = new GraphEdge(_startVertexAfh9Vkc, _endVertexD9jeNts, _weightCTqnYn6)
		const _returnValueHg1Sws0 = await _startVertexb52YEtF.reverse()
		const _returnValueZoo6FoO = await bellmanFord(_graphPkZL2YZ, _startVertexb52YEtF)
	});

	it('test for bellmanFord', async () => {
		const _returnValueTNc4zQs = -1.47524679564955;
		const _graphmUSv7yT = () => { return _returnValueTNc4zQs };
		const _returnValueGrcIwSo = false;
		const _getKeyTgC2Ig = () => { return _returnValueGrcIwSo };
		const _startVertexRH1WIQ0 = {
			"getKey": _getKeyTgC2Ig
	}
		const _returnValueOKeL1Xo = await bellmanFord(_graphmUSv7yT, _startVertexRH1WIQ0)
	});

	it('test for bellmanFord', async () => {
		const _returnValuehtHcbPn = []
		const _getAllVerticeso5Nl90f = () => { return _returnValuehtHcbPn };
		const _returnValueVOz2pKX = undefined;
		const _getVertexByKeyQ5ObxB = () => { return _returnValueVOz2pKX };
		const _returnValuesFWPnKz = true;
		const _getNeighborsdoVYYJB = () => { return _returnValuesFWPnKz };
		const _returnValueKnQi9e9 = undefined;
		const _findEdgekmD9oHi = () => { return _returnValueKnQi9e9 };
		const _graphMHn1rwJ = {
			"getAllVertices": _getAllVerticeso5Nl90f,
		"getVertexByKey": _getVertexByKeyQ5ObxB,
		"getNeighbors": _getNeighborsdoVYYJB,
		"findEdge": _findEdgekmD9oHi
	}
		const _arrayValuesiJKJXs = undefined;
		const _returnValuey2QtTPC = [_arrayValuesiJKJXs]
		const _getKeyTBlyShr = () => { return _returnValuey2QtTPC };
		const _startVertexmgyxWc0 = {
			"getKey": _getKeyTBlyShr
	}
		const _returnValueL0hWEtV = await bellmanFord(_graphMHn1rwJ, _startVertexmgyxWc0)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedb5TQdQQ = true;
		const _graphC91PiBr = new Graph(_isDirectedb5TQdQQ)
		const _returnValueKJ4zBr2 = await _graphC91PiBr.getAllEdges()
		const _returnValueWcP1Dxs = null;
		const _getKeyHCi8eB = () => { return _returnValueWcP1Dxs };
		const _newVertexVdD2fh = {
			"getKey": _getKeyHCi8eB
	}
		const _returnValueXFYqhc0 = await _graphC91PiBr.addVertex(_newVertexVdD2fh)
		const _returnValueAQwc1cC = "wnokYlWiCB9ztzyR3wEeoRAQHVhxoEbDkakTvzx76lVdjS";
		const _getKeys5XKxpG = () => { return _returnValueAQwc1cC };
		const _startVertexvggcKRT = {
			"getKey": _getKeys5XKxpG
	}
		const _returnValueZg6ZgeQ = await bellmanFord(_graphC91PiBr, _startVertexvggcKRT)
	});
})
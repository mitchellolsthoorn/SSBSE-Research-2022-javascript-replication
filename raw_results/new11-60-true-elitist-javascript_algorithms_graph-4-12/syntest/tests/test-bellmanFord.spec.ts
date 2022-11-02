export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuevCIKPrd = -0.14093814346829348;
		const _getAllVerticesOxyRNZ1 = () => { return _returnValuevCIKPrd };
		const _returnValueEtqmlFn = undefined;
		const _getVertexByKeyBGGkQeA = () => { return _returnValueEtqmlFn };
		const _returnValueXcPuAf7 = undefined;
		const _getNeighborsgN5rn5n = () => { return _returnValueXcPuAf7 };
		const _returnValuezGSAXH = true;
		const _findEdgeUvj5ArL = () => { return _returnValuezGSAXH };
		const _graphd9C7Nxp = {
			"getAllVertices": _getAllVerticesOxyRNZ1,
		"getVertexByKey": _getVertexByKeyBGGkQeA,
		"getNeighbors": _getNeighborsgN5rn5n,
		"findEdge": _findEdgeUvj5ArL
	}
		const _getKeyAWdJ0Dl = null;
		const _startVertexCw4X1mA = {
			"getKey": _getKeyAWdJ0Dl
	}
		const _returnValuecwbQGE4 = await bellmanFord(_graphd9C7Nxp, _startVertexCw4X1mA)
	});

	it('test for bellmanFord', async () => {
		const _returnValueQY9pNh = true;
		const _getAllVerticesQ6SqS8V = () => { return _returnValueQY9pNh };
		const _returnValueZIyl68f = -0.6552635190491003;
		const _getVertexByKeynkSljFv = () => { return _returnValueZIyl68f };
		const _returnValueoDCbUCy = true;
		const _getNeighborsP2fHoHe = () => { return _returnValueoDCbUCy };
		const _arrayValueZ8csIVy = "TmVwfpYeIgMlOjWjhWTwtp5aE0feayBGgigBTaWAGlBrr84";
		const _returnValueARQIYB6 = "STrSvcCfz8AWJaqgnczt3gqRu3T7wFlmu3GIiffkQ1YUiWxt4I";
		const _arrayValueKVwnp9e = () => { return _returnValueARQIYB6 };
		const _arrayValueZFDC3ze = undefined;
		const _returnValueyQao8X8 = [_arrayValueZ8csIVy, _arrayValueKVwnp9e, _arrayValueZFDC3ze]
		const _returnValueUxD34pJ = () => { return _returnValueyQao8X8 };
		const _findEdgex3BkBwL = () => { return _returnValueUxD34pJ };
		const _graphcC16B5y = {
			"getAllVertices": _getAllVerticesQ6SqS8V,
		"getVertexByKey": _getVertexByKeynkSljFv,
		"getNeighbors": _getNeighborsP2fHoHe,
		"findEdge": _findEdgex3BkBwL
	}
		const _arrayValueXuPVoZR = {
		
	}
		const _arrayValueXhIgcAA = null;
		const _returnValueTrr1XON = [_arrayValueXuPVoZR, _arrayValueXhIgcAA]
		const _getKeyGRWfQHx = () => { return _returnValueTrr1XON };
		const _startVertexhjljGt = {
			"getKey": _getKeyGRWfQHx
	}
		const _returnValueD46gdYq = await bellmanFord(_graphcC16B5y, _startVertexhjljGt)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedJtKrX2z = true;
		const _graphKZZzSQJ = new Graph(_isDirectedJtKrX2z)
		const _returnValueoCSXqnL = await _graphKZZzSQJ.getAllVertices()
		const _returnValueWfN2TR = await _graphKZZzSQJ.reverse()
		const _returnValuewosPuzT = null;
		const _getKeynz7klFH = () => { return _returnValuewosPuzT };
		const _startVertexoGTE3cK = {
			"getKey": _getKeynz7klFH
	}
		const _returnValuevz2543C = await bellmanFord(_graphKZZzSQJ, _startVertexoGTE3cK)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedAgdwwH = false;
		const _graphmcZajLg = new Graph(_isDirectedAgdwwH)
		const _returnValueFeO1VwV = undefined;
		const _returnValuegMNDKMI = () => { return _returnValueFeO1VwV };
		const _getKeyXp7AHMo = () => { return _returnValuegMNDKMI };
		const _newVertexNxUMDMY = {
			"getKey": _getKeyXp7AHMo
	}
		const _returnValueKiev2Kr = await _graphmcZajLg.addVertex(_newVertexNxUMDMY)
		const _returnValuebehhaqw = undefined;
		const _getKeyqVlOnIv = () => { return _returnValuebehhaqw };
		const _startVertexdakDoJN = {
			"getKey": _getKeyqVlOnIv
	}
		const _endVertexDttB6T = "QjBUqgSA";
		const _returnValueCUMWaRH = await _graphmcZajLg.findEdge(_startVertexdakDoJN, _endVertexDttB6T)
		const _valued29KDcx = false;
		const _returnValue0AomZu = null;
		const _keyCallbackTmULbUg = () => { return _returnValue0AomZu };
		const _startVertexpMNjud7 = new DisjointSetItem(_valued29KDcx, _keyCallbackTmULbUg)
		const _returnValueKBBLtAg = await _startVertexpMNjud7.getKey()
		const _returnValuezWM6mlw = await bellmanFord(_graphmcZajLg, _startVertexpMNjud7)
	});
})
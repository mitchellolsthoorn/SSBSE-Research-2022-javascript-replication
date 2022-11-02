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
		const _arrayValuesA8OpRw = undefined;
		const _arrayValueZLSZ60 = true;
		const _arrayValueYFKNKtC = null;
		const _graphEcc9kJo = [_arrayValuesA8OpRw, _arrayValueZLSZ60, _arrayValueYFKNKtC]
		const _returnValueu7cSO4R = false;
		const _getKeyFAIIxC4 = () => { return _returnValueu7cSO4R };
		const _startVertexfrh9RmD = {
			"getKey": _getKeyFAIIxC4
	}
		const _returnValueQc6D5UC = await dijkstra(_graphEcc9kJo, _startVertexfrh9RmD)
	});

	it('test for dijkstra', async () => {
		const _isDirectedF46w0rG = false;
		const _graphQVhZRre = new Graph(_isDirectedF46w0rG)
		const _returnValuenaVwfp2 = undefined;
		const _getNeighborsjGt90YL = () => { return _returnValuenaVwfp2 };
		const _vertexLgV2Uf2 = {
			"getNeighbors": _getNeighborsjGt90YL
	}
		const _returnValueBuBB0YV = await _graphQVhZRre.getNeighbors(_vertexLgV2Uf2)
		const _returnValueetFPCYm = "jQg1V4LwyrMglNWsoHcR5bw42P1vM186HwKI10OEASNe1ZxoJYrjybShjvMdEcvvyiQcLiT";
		const _getKeyuHzDmW = () => { return _returnValueetFPCYm };
		const _startVertexePau8sZ = {
			"getKey": _getKeyuHzDmW
	}
		const _returnValueOhwCnOT = await dijkstra(_graphQVhZRre, _startVertexePau8sZ)
	});

	it('test for dijkstra', async () => {
		const _isDirectedEzdrwNH = false;
		const _graphOCOqsy = new Graph(_isDirectedEzdrwNH)
		const _returnValuewGKzIQ4 = await _graphOCOqsy.getVerticesIndices()
		const _returnValuewipFZUj = false;
		const _returnValueLo8fAtM = () => { return _returnValuewipFZUj };
		const _returnValueQK5UwV = () => { return _returnValueLo8fAtM };
		const _arrayValueF1MmUy1 = () => { return _returnValueQK5UwV };
		const _valueVGevGOP = [_arrayValueF1MmUy1]
		const _startVertexlwV6sd = new GraphVertex(_valueVGevGOP)
		const _arrayValuekxMxkJS = null;
		const _arrayValueXn4hAA = false;
		const _requiredEdgeb55gVp1 = [_arrayValuekxMxkJS, _arrayValueXn4hAA]
		const _returnValuenANoKlE = await _startVertexlwV6sd.hasEdge(_requiredEdgeb55gVp1)
		const _returnValueUzyIipq = await _startVertexlwV6sd.getNeighbors()
		const _returnValueSZHsqi5 = await dijkstra(_graphOCOqsy, _startVertexlwV6sd)
	});

	it('test for dijkstra', async () => {
		const _isDirectedkhZpZN = true;
		const _graphAbM7XuX = new Graph(_isDirectedkhZpZN)
		const _arrayValueope1Nnp = null;
		const _arrayValueFuI0eVU = undefined;
		const _returnValueoL82pMT = [_arrayValueope1Nnp, _arrayValueFuI0eVU]
		const _getNeighborsXqkc6L = () => { return _returnValueoL82pMT };
		const _vertexOSOa1yd = {
			"getNeighbors": _getNeighborsXqkc6L
	}
		const _returnValueXtdzTf2 = await _graphAbM7XuX.getNeighbors(_vertexOSOa1yd)
		const _valuexYKAN3i = null;
		const _startVertexyl22OM = new GraphVertex(_valuexYKAN3i)
		const _returnValueDsAB8q4 = []
		const _edgeC36IpC = () => { return _returnValueDsAB8q4 };
		const _returnValuez37w8Xn = await _startVertexyl22OM.deleteEdge(_edgeC36IpC)
		const _arrayValuexyyR1ux = "etA";
		const _arrayValueUdiZXAe = "55962feyVkFHKuB1GGRPvcw9mNlpEJElRi1W1AMS2ghStBSoqpB1nFHYeciJQGkpOce6Zmxjg6YBOBP47XhOq9CiRP";
		const _edgeZo9zD0X = [_arrayValuexyyR1ux, _arrayValueUdiZXAe]
		const _returnValueoPvyCJt = await _startVertexyl22OM.addEdge(_edgeZo9zD0X)
		const _vertexhiR0HFN = -7.463481281899639;
		const _returnValueXF63rfs = await _startVertexyl22OM.findEdge(_vertexhiR0HFN)
		const _returnValueDLKtzGI = await dijkstra(_graphAbM7XuX, _startVertexyl22OM)
	});
})
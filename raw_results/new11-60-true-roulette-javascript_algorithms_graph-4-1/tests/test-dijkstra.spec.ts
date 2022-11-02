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
		const _returnValueNYLB2uT = undefined;
		const _getAllVerticesc2pmGeF = () => { return _returnValueNYLB2uT };
		const _returnValueJhHumBE = -0.817123627951851;
		const _findEdgeV6S4gT9 = () => { return _returnValueJhHumBE };
		const _graphWnCVyjV = {
			"getAllVertices": _getAllVerticesc2pmGeF,
		"findEdge": _findEdgeV6S4gT9
	}
		const _returnValueWgM9wpz = 6.43320988804534;
		const _getKeyJcOVyXf = () => { return _returnValueWgM9wpz };
		const _startVertexKZyW2Da = {
			"getKey": _getKeyJcOVyXf
	}
		const _returnValueF3LsbP = await dijkstra(_graphWnCVyjV, _startVertexKZyW2Da)
	});

	it('test for dijkstra', async () => {
		const _isDirectedphUnRXp = false;
		const _graphoZmwYVn = new Graph(_isDirectedphUnRXp)
		const _returnValuemd9Daon = await _graphoZmwYVn.getWeight()
		const _returnValuewoQRPBz = "HjgK1pTeoJLjgij6cmG0sDNuvoyM52AMwiqE";
		const _getKeyCHZl2Lo = () => { return _returnValuewoQRPBz };
		const _startVertexR4hpxh = {
			"getKey": _getKeyCHZl2Lo
	}
		const _returnValueSyFy8CM = await dijkstra(_graphoZmwYVn, _startVertexR4hpxh)
	});

	it('test for dijkstra', async () => {
		const _isDirectedHaTaQ5D = false;
		const _graphJ0bCAId = new Graph(_isDirectedHaTaQ5D)
		const _returnValueKnDHFAH = await _graphJ0bCAId.getWeight()
		const _returnValueWQMW3Su = await _graphJ0bCAId.getAdjacencyMatrix()
		const _valuea4tFimC = true;
		const _startVertexmr5bAGm = new GraphVertex(_valuea4tFimC)
		const _arrayValuedxR0EbK = 0.8639635306974078;
		const _arrayValuekdEhNrh = -5.60839773467637;
		const _arrayValueCt1W0rm = {
		
	}
		const _returnValuess8uHk7 = -5.447516098844027;
		const _arrayValueX3iv6KY = () => { return _returnValuess8uHk7 };
		const _arrayValueV5PTupf = "spflsxhm9qHHjkceRS";
		const _arrayValuep4ZckWp = [_arrayValueCt1W0rm, _arrayValueX3iv6KY, _arrayValueV5PTupf]
		const _vertexni2rxZD = [_arrayValuedxR0EbK, _arrayValuekdEhNrh, _arrayValuep4ZckWp]
		const _returnValueX46hy7M = await _startVertexmr5bAGm.hasNeighbor(_vertexni2rxZD)
		const _returnValuex1GLBp5 = await _startVertexmr5bAGm.getEdges()
		const _returnValuewFspwYm = await dijkstra(_graphJ0bCAId, _startVertexmr5bAGm)
	});
})
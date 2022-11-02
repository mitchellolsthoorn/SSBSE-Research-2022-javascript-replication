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
		const _graphcmJua5 = "VjPf4MAM2CkzsAltpr27n6za1dEHRNmJWS91dVjQ3PY0YB2uQVUfF5V";
		const _returnValueGqKZOiW = true;
		const _getKeyDvh530T = () => { return _returnValueGqKZOiW };
		const _startVertexSvc7ykS = {
			"getKey": _getKeyDvh530T
	}
		const _returnValuenn81W9I = await dijkstra(_graphcmJua5, _startVertexSvc7ykS)
	});

	it('test for dijkstra', async () => {
		const _isDirectedlvZe1lL = false;
		const _graphVJ8fOy = new Graph(_isDirectedlvZe1lL)
		const _returnValuepGBNhBi = await _graphVJ8fOy.getAllVertices()
		const _returnValuek4Ej9mT = null;
		const _getKeysQEDfks = () => { return _returnValuek4Ej9mT };
		const _startVertexYzuOZiJ = {
			"getKey": _getKeysQEDfks
	}
		const _returnValueahLWfcF = await dijkstra(_graphVJ8fOy, _startVertexYzuOZiJ)
	});

	it('test for dijkstra', async () => {
		const _isDirectedBqhumaU = false;
		const _graphZHmhlHY = new Graph(_isDirectedBqhumaU)
		const _returnValuedSGYDOX = await _graphZHmhlHY.getAdjacencyMatrix()
		const _returnValueP75TqkR = await _graphZHmhlHY.getAllEdges()
		const _returnValueNRhf1kv = 7.947942496925169;
		const _valueCDqCmbM = () => { return _returnValueNRhf1kv };
		const _startVertexxFb7Qyt = new GraphVertex(_valueCDqCmbM)
		const _returnValueVPqBFDG = await _startVertexxFb7Qyt.getKey()
		const _returnValuedHjxdro = await dijkstra(_graphZHmhlHY, _startVertexxFb7Qyt)
	});
})
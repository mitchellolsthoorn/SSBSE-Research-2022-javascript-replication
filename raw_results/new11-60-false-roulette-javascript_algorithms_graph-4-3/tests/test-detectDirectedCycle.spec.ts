export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _getAllVerticeszxhIvae = null;
		const _graphG2xIATc = {
			"getAllVertices": _getAllVerticeszxhIvae
	}
		const _returnValueRpweF8 = await detectDirectedCycle(_graphG2xIATc)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedQOD6PTo = true;
		const _graphOljObIH = new Graph(_isDirectedQOD6PTo)
		const _returnValuecz3nAul = await _graphOljObIH.toString()
		const _returnValued8RfsEc = await detectDirectedCycle(_graphOljObIH)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedhPVXQE = true;
		const _graph66d8bM = new Graph(_isDirectedhPVXQE)
		const _returnValueE4B8PJn = -1.8526397580465694;
		const _getKeyMmWFDsg = () => { return _returnValueE4B8PJn };
		const _newVertexLru9bWC = {
			"getKey": _getKeyMmWFDsg
	}
		const _returnValueVEJYUIt = await _graph66d8bM.addVertex(_newVertexLru9bWC)
		const _returnValue2g8CJ9 = await _graph66d8bM.getAllEdges()
		const _valuePka5Fg = null;
		const _vertexcaX61CZ = new GraphVertex(_valuePka5Fg)
		const _vertexSuyzpB = "mmbPR1";
		const _returnValueQWXX9Hp = await _vertexcaX61CZ.hasNeighbor(_vertexSuyzpB)
		const _returnValuez6baZ2p = await _graph66d8bM.getNeighbors(_vertexcaX61CZ)
		const _returnValuelEzQD0E = await _graph66d8bM.reverse()
		const _returnValueSEbbO9L = await detectDirectedCycle(_graph66d8bM)
	});
})
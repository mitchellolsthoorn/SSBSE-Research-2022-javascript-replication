export {}
import GraphEdge from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphEdge.js";
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _startVertexMrJ6PYl = {
		
	}
		const _endVertexKT6ysvq = {
		
	}
		const _weightKY6LE7g = 0.22941062621170794;
		const _graphYCL7GGW = new GraphEdge(_startVertexMrJ6PYl, _endVertexKT6ysvq, _weightKY6LE7g)
		const _returnValuey9sODt3 = await _graphYCL7GGW.reverse()
		const _returnValueafZQ9k1 = await stronglyConnectedComponents(_graphYCL7GGW)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedAcXDxG = true;
		const _graphJgaEbg8 = new Graph(_isDirectedAcXDxG)
		const _returnValuey7Kce3 = await _graphJgaEbg8.getAllVertices()
		const _returnValueyr7WXN = "xG6Ppa83YuEcUCA1trkQVjjf7EpkIUKEIfMparfn9CLXepPVpnQRj2XpzMAHRIkxyivgIn7pM21KUwIg6AK9guxFIRy7y";
		const _getNeighbors5KSUSI = () => { return _returnValueyr7WXN };
		const _vertexWo5PYMw = {
			"getNeighbors": _getNeighbors5KSUSI
	}
		const _returnValueVAljGBm = await _graphJgaEbg8.getNeighbors(_vertexWo5PYMw)
		const _returnValueterHMZN = await stronglyConnectedComponents(_graphJgaEbg8)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirecteddma8b9o = false;
		const _graphoVvPzM3 = new Graph(_isDirecteddma8b9o)
		const _returnValuef06JJWc = await _graphoVvPzM3.reverse()
		const _valuexpXkRTb = null;
		const _newVertexoucfHEA = new GraphVertex(_valuexpXkRTb)
		const _vertexAmdxtpJ = 3.0059876193044204;
		const _returnValuemelW0El = await _newVertexoucfHEA.hasNeighbor(_vertexAmdxtpJ)
		const _returnValuebXyr4sy = true;
		const _callbackH7rPq30 = () => { return _returnValuebXyr4sy };
		const _returnValueJ5XmL1i = await _newVertexoucfHEA.toString(_callbackH7rPq30)
		const _returnValueRuGHB4g = await _graphoVvPzM3.addVertex(_newVertexoucfHEA)
		const _returnValuetr32nqr = await stronglyConnectedComponents(_graphoVvPzM3)
	});
})
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
		const _returnValueTbw4ZIx = {
		
	}
		const _graphygmWAHd = () => { return _returnValueTbw4ZIx };
		const _returnValueXBazsB9 = await detectDirectedCycle(_graphygmWAHd)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedRTbSFHM = true;
		const _graphBdWHA6b = new Graph(_isDirectedRTbSFHM)
		const _returnValuemELGttK = await _graphBdWHA6b.getAllEdges()
		const _returnValuev6dOg0N = await _graphBdWHA6b.getWeight()
		const _returnValueCdJoYgt = await _graphBdWHA6b.getAllEdges()
		const _returnValueJkVDJXP = await detectDirectedCycle(_graphBdWHA6b)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedtUr4sb2 = false;
		const _graphHKTQCA = new Graph(_isDirectedtUr4sb2)
		const _valuerGaESd = "RGl1TTbUMnybCwbVKFREmKRsU2bbFlakca";
		const _newVertexvvY44eX = new GraphVertex(_valuerGaESd)
		const _returnValueTOmbAbg = await _newVertexvvY44eX.getKey()
		const _requiredEdgezv4lp6B = null;
		const _returnValuecBuXCHy = await _newVertexvvY44eX.hasEdge(_requiredEdgezv4lp6B)
		const _returnValueAVQ6N77 = await _newVertexvvY44eX.getDegree()
		const _returnValueXX9dmH0 = await _newVertexvvY44eX.getNeighbors()
		const _returnValueQ2keFp = await _newVertexvvY44eX.getDegree()
		const _returnValuedl5mdbv = await _graphHKTQCA.addVertex(_newVertexvvY44eX)
		const _returnValuewywEXLx = await detectDirectedCycle(_graphHKTQCA)
	});
})
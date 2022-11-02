export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValueJueNRC9 = {
		
	}
		const _returnValuefBeH1vY = () => { return _returnValueJueNRC9 };
		const _graphnCkFPrY = () => { return _returnValuefBeH1vY };
		const _returnValueH5KERkk = await stronglyConnectedComponents(_graphnCkFPrY)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedYxaljUX = true;
		const _graphOYrVBV4 = new Graph(_isDirectedYxaljUX)
		const _returnValuegizq9c9 = await _graphOYrVBV4.getVerticesIndices()
		const _returnValueoW8Gak = await _graphOYrVBV4.getAdjacencyMatrix()
		const _returnValueXLaTk9C = await _graphOYrVBV4.toString()
		const _returnValueRv1eDOV = await _graphOYrVBV4.getAllVertices()
		const _vertexKeyWPKHa63 = 9.8034794241457;
		const _returnValueWTSIWLA = await _graphOYrVBV4.getVertexByKey(_vertexKeyWPKHa63)
		const _returnValuezQAceuO = await stronglyConnectedComponents(_graphOYrVBV4)
	});
})
export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _returnValuefsWrIC = -0.6636836039953184;
		const _reversexc7qmUc = () => { return _returnValuefsWrIC };
		const _graphx5W4AQm = {
			"reverse": _reversexc7qmUc
	}
		const _returnValueoUqMIQa = await stronglyConnectedComponents(_graphx5W4AQm)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedisfkoJn = false;
		const _graphqLBuI5t = new Graph(_isDirectedisfkoJn)
		const _vertexKeyWiOEbVt = null;
		const _returnValuepIHSmWX = await _graphqLBuI5t.getVertexByKey(_vertexKeyWiOEbVt)
		const _vertexKeyecjUi9P = true;
		const _returnValueA1WPM7c = await _graphqLBuI5t.getVertexByKey(_vertexKeyecjUi9P)
		const _returnValueuPwByKN = await _graphqLBuI5t.getAllEdges()
		const _vertexKeyd1r9sUz = 9.887054319456826;
		const _returnValuenzxrEaw = await _graphqLBuI5t.getVertexByKey(_vertexKeyd1r9sUz)
		const _returnValueBIBMuR4 = await stronglyConnectedComponents(_graphqLBuI5t)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedGT7KQOb = true;
		const _graphU6l4Xp = new Graph(_isDirectedGT7KQOb)
		const _returnValuei1zr5RH = await _graphU6l4Xp.getAdjacencyMatrix()
		const _valuekmLxft9 = false;
		const _newVertexCHBRiX9 = new GraphVertex(_valuekmLxft9)
		const _returnValueLqmlxcq = await _newVertexCHBRiX9.deleteAllEdges()
		const _returnValuecBA8Gq3 = await _graphU6l4Xp.addVertex(_newVertexCHBRiX9)
		const _returnValueuuXBNk5 = await stronglyConnectedComponents(_graphU6l4Xp)
	});
})
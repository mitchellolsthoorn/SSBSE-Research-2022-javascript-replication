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
		const _graphZVS88Mk = []
		const _returnValueP7GTaTr = await stronglyConnectedComponents(_graphZVS88Mk)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedjgalqg2 = true;
		const _graphgqdM5cE = new Graph(_isDirectedjgalqg2)
		const _returnValuevcP4mLy = await _graphgqdM5cE.getAllEdges()
		const _returnValuesGjnSSG = await stronglyConnectedComponents(_graphgqdM5cE)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedDHHsm7O = false;
		const _graphX4hDWwU = new Graph(_isDirectedDHHsm7O)
		const _valuegWWOLv = false;
		const _newVertexZXBjBQ2 = new GraphVertex(_valuegWWOLv)
		const _returnValueBxfh4F0 = await _newVertexZXBjBQ2.getNeighbors()
		const _returnValueu1klEug = await _newVertexZXBjBQ2.getEdges()
		const _edgeLwyuGVt = "YD918MQ7p6Co6fDh8RtJ9IeIHf4yBJj";
		const _returnValueUG8NRZB = await _newVertexZXBjBQ2.deleteEdge(_edgeLwyuGVt)
		const _returnValuenX5yCJL = await _newVertexZXBjBQ2.getKey()
		const _returnValueQGe6L82 = await _newVertexZXBjBQ2.getNeighbors()
		const _returnValueK3a8YhJ = await _graphX4hDWwU.addVertex(_newVertexZXBjBQ2)
		const _returnValueGqXvN2x = await _graphX4hDWwU.getAdjacencyMatrix()
		const _vertexKeytkEQNs0 = "ShsHyrFRYdxHvIafX1k8QYhiZm4E2exUhapmDIRwtmSnhnPli6MBQcEE880UEMt8Pa7bLkoe9JT7pjQ4cJmawVb6wcUkQwX";
		const _returnValueMJ4Uov2 = await _graphX4hDWwU.getVertexByKey(_vertexKeytkEQNs0)
		const _returnValueL9LFv5B = await _graphX4hDWwU.getWeight()
		const _returnValueivERDwz = await stronglyConnectedComponents(_graphX4hDWwU)
	});
})
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
		const _returnValueTYs9NjM = null;
		const _graphEz5mACb = () => { return _returnValueTYs9NjM };
		const _returnValueoXvz49G = await stronglyConnectedComponents(_graphEz5mACb)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectednIz5iXw = true;
		const _graphmjeyE3a = new Graph(_isDirectednIz5iXw)
		const _returnValuerI69YEl = await _graphmjeyE3a.getAdjacencyMatrix()
		const _returnValuen4mHSQG = await _graphmjeyE3a.getAllEdges()
		const _returnValueJnJLz0A = await _graphmjeyE3a.getAllVertices()
		const _returnValueEb3IeDo = await _graphmjeyE3a.getAllEdges()
		const _returnValuez0EMTr = await stronglyConnectedComponents(_graphmjeyE3a)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedZXweS9i = false;
		const _graphA1w6ugP = new Graph(_isDirectedZXweS9i)
		const _valueBG2TzC = "TiAM3krns4SzhVAUqD5QWMD5A7Be0ney271VwgBbGI7rTw5gBEbOjss4DDeP3nl";
		const _newVertexiSiBS2n = new GraphVertex(_valueBG2TzC)
		const _returnValueGazDGzi = await _newVertexiSiBS2n.getKey()
		const _returnValueKlWqnd = await _graphA1w6ugP.addVertex(_newVertexiSiBS2n)
		const _returnValueMTeFKQ1 = await _graphA1w6ugP.getAdjacencyMatrix()
		const _returnValueZDklgjg = await stronglyConnectedComponents(_graphA1w6ugP)
	});
})
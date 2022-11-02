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
		const _reverseWXoApB9 = "7cDZSkzADU278IvZZhKQgHYxQv89XJJPmwRM4eHB3i8C5bEmIb0KRDX6txOjeIfvOg6aygV4QEJmfd8gkdkTqZV3JtXj1QVBdN";
		const _graphvnbB35u = {
			"reverse": _reverseWXoApB9
	}
		const _returnValuet3hB8n9 = await stronglyConnectedComponents(_graphvnbB35u)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectede8tgHT = false;
		const _graphazRFnkQ = new Graph(_isDirectede8tgHT)
		const _returnValuelTxJcui = await _graphazRFnkQ.getAllEdges()
		const _returnValuer0kToa1 = await _graphazRFnkQ.getAllVertices()
		const _returnValuefZaPBRD = await _graphazRFnkQ.getAllEdges()
		const _returnValueyOrS1Rf = await stronglyConnectedComponents(_graphazRFnkQ)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedM7fwoEq = false;
		const _graphyDn8w84 = new Graph(_isDirectedM7fwoEq)
		const _valueJE6rmRb = false;
		const _newVertexeolIWU = new GraphVertex(_valueJE6rmRb)
		const _requiredEdge6gDyrr = undefined;
		const _returnValuewdIEeT3 = await _newVertexeolIWU.hasEdge(_requiredEdge6gDyrr)
		const _returnValues3yM5mP = await _newVertexeolIWU.getKey()
		const _edgehtTPOIf = -4.398130666327686;
		const _returnValueIdyF0Ro = await _newVertexeolIWU.deleteEdge(_edgehtTPOIf)
		const _returnValuerpuyVy9 = await _graphyDn8w84.addVertex(_newVertexeolIWU)
		const _returnValuekzYedaj = await _graphyDn8w84.reverse()
		const _returnValueaibIOvJ = await stronglyConnectedComponents(_graphyDn8w84)
	});
})
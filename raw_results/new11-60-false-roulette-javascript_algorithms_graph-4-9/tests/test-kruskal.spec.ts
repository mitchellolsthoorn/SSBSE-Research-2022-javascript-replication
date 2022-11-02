export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedCcv9xSW = "jYmi6RbabP9LBVNO1rTZYc7B7";
		const _getAllEdgesPyg8Ht2 = null;
		const _returnValuePMinDfP = "z7fyOO93EdTqn2JUGND65UPPSGEj2v2h08dBR5IEyQzQCecCdhH4gGbC1";
		const _getAllVerticesAIZSTOR = () => { return _returnValuePMinDfP };
		const _graphhP6cu3z = {
			"isDirected": _isDirectedCcv9xSW,
		"getAllEdges": _getAllEdgesPyg8Ht2,
		"getAllVertices": _getAllVerticesAIZSTOR
	}
		const _returnValuej9IkJ4 = await kruskal(_graphhP6cu3z)
	});

	it('test for kruskal', async () => {
		const _isDirectedKnZeFYI = false;
		const _graphKy4K5Fq = new Graph(_isDirectedKnZeFYI)
		const _returnValueIFEEIu = await _graphKy4K5Fq.getAdjacencyMatrix()
		const _returnValuenGX3Ozq = await _graphKy4K5Fq.getAllEdges()
		const _returnValueQm5Nc34 = await kruskal(_graphKy4K5Fq)
	});
})
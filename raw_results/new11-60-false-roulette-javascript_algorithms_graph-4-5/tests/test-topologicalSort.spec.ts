export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphGszQj2I = "Q7U3pUrDO4dRXZVzwMsUPifI2n2";
		const _returnValueussu7ex = await topologicalSort(_graphGszQj2I)
	});

	it('test for topologicalSort', async () => {
		const _isDirectedj0bUYEX = true;
		const _grapht21Eh4n = new Graph(_isDirectedj0bUYEX)
		const _returnValueAbZBmTW = null;
		const _getKeyPyvmTLt = () => { return _returnValueAbZBmTW };
		const _newVertexJUbyyXN = {
			"getKey": _getKeyPyvmTLt
	}
		const _returnValueoJBHJwu = await _grapht21Eh4n.addVertex(_newVertexJUbyyXN)
		const _returnValueWLt9tpZ = await _grapht21Eh4n.getVerticesIndices()
		const _returnValuete30fw6 = await topologicalSort(_grapht21Eh4n)
	});
})
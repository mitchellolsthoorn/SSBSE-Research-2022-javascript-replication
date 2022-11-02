export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueI0pu52b = -8.059973227567578;
		const _getAllVerticesI3ijQPF = () => { return _returnValueI0pu52b };
		const _returnValuePjOhnme = {
		
	}
		const _getAllEdgesMswbLwo = () => { return _returnValuePjOhnme };
		const _graphk1PkCtp = {
			"getAllVertices": _getAllVerticesI3ijQPF,
		"getAllEdges": _getAllEdgesMswbLwo
	}
		const _returnValueTSTdRIt = await detectUndirectedCycleUsingDisjointSet(_graphk1PkCtp)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueZKC6ZeS = []
		const _getAllVerticesgNCz46X = () => { return _returnValueZKC6ZeS };
		const _getAllEdgesvb9kVNe = 1.9835190160621696;
		const _graphZKvSo4d = {
			"getAllVertices": _getAllVerticesgNCz46X,
		"getAllEdges": _getAllEdgesvb9kVNe
	}
		const _returnValuea5W5v4u = await detectUndirectedCycleUsingDisjointSet(_graphZKvSo4d)
	});
})
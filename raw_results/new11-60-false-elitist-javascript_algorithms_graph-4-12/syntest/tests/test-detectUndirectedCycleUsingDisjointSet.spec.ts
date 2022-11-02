export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueQ4gk8Tz = -8.32915844970813;
		const _getAllVerticesLdQaRyX = () => { return _returnValueQ4gk8Tz };
		const _returnValuedKCb8nC = -5.859708017581924;
		const _getAllEdgesg9kpL0K = () => { return _returnValuedKCb8nC };
		const _graphHsVBjfi = {
			"getAllVertices": _getAllVerticesLdQaRyX,
		"getAllEdges": _getAllEdgesg9kpL0K
	}
		const _returnValue6S1nIY = await detectUndirectedCycleUsingDisjointSet(_graphHsVBjfi)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueVdUuCI = []
		const _getAllVerticestGQpyAm = () => { return _returnValueVdUuCI };
		const _arrayValueEDkC6ot = null;
		const _arrayValuekrJMxYD = null;
		const _arrayValueqPY5XXr = [_arrayValueEDkC6ot, _arrayValuekrJMxYD]
		const _arrayValuewWzGf0 = undefined;
		const _arrayValuezCUM91q = undefined;
		const _arrayValuecjiZJoJ = undefined;
		const _returnValueNgAMt8Z = [_arrayValueqPY5XXr, _arrayValuewWzGf0, _arrayValuezCUM91q, _arrayValuecjiZJoJ]
		const _getAllEdgesFDZTWoD = () => { return _returnValueNgAMt8Z };
		const _graphyC7edO = {
			"getAllVertices": _getAllVerticestGQpyAm,
		"getAllEdges": _getAllEdgesFDZTWoD
	}
		const _returnValuejajKGFr = await detectUndirectedCycleUsingDisjointSet(_graphyC7edO)
	});
})
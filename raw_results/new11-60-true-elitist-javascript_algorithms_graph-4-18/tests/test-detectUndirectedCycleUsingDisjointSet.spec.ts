export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueOpIZ0T7 = null;
		const _getAllVerticesDwd79R = () => { return _returnValueOpIZ0T7 };
		const _returnValueY1gZLDI = undefined;
		const _returnValueFKLjKDA = () => { return _returnValueY1gZLDI };
		const _getAllEdgesv8iUJe2 = () => { return _returnValueFKLjKDA };
		const _graphteXqYjQ = {
			"getAllVertices": _getAllVerticesDwd79R,
		"getAllEdges": _getAllEdgesv8iUJe2
	}
		const _returnValueccvSqoL = await detectUndirectedCycleUsingDisjointSet(_graphteXqYjQ)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedtAcSQD = true;
		const _graphjQkbdY0 = new Graph(_isDirectedtAcSQD)
		const _returnValueim1Ur3c = await _graphjQkbdY0.getAllVertices()
		const _returnValuez5Uq5Ml = await _graphjQkbdY0.reverse()
		const _returnValuePbSgSjj = await _graphjQkbdY0.getAllEdges()
		const _returnValueRKD6xD = await _graphjQkbdY0.getWeight()
		const _returnValueasMrvVs = await detectUndirectedCycleUsingDisjointSet(_graphjQkbdY0)
	});
})
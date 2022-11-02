export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuetFUL84g = false;
		const _graphRfvKLRL = () => { return _returnValuetFUL84g };
		const _returnValueNrAwG8i = await detectUndirectedCycleUsingDisjointSet(_graphRfvKLRL)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedCyRIlCM = true;
		const _graphNhEFYKg = new Graph(_isDirectedCyRIlCM)
		const _returnValuedDxWt6A = await _graphNhEFYKg.getAdjacencyMatrix()
		const _returnValuedSlciDv = await _graphNhEFYKg.getVerticesIndices()
		const _returnValuesXXtUU = await detectUndirectedCycleUsingDisjointSet(_graphNhEFYKg)
	});
})
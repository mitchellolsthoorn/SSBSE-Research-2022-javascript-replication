export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueqfeQvh1 = null;
		const _grapherUVcOw = () => { return _returnValueqfeQvh1 };
		const _returnValuepKrMDLZ = await detectUndirectedCycleUsingDisjointSet(_grapherUVcOw)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedDvJvbN8 = false;
		const _graphjvWg182 = new Graph(_isDirectedDvJvbN8)
		const _returnValueWRXxQ1E = await _graphjvWg182.getAllVertices()
		const _returnValueIJkWdyg = await detectUndirectedCycleUsingDisjointSet(_graphjvWg182)
	});
})
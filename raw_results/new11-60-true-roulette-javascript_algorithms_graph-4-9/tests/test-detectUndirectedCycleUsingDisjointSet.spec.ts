export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphHW6J8pk = []
		const _returnValuej5TOkWd = await detectUndirectedCycleUsingDisjointSet(_graphHW6J8pk)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedPad7P0I = true;
		const _graphaXHTJeV = new Graph(_isDirectedPad7P0I)
		const _returnValueHjOVTvs = await _graphaXHTJeV.getAllEdges()
		const _returnValueV7ZaSUz = await detectUndirectedCycleUsingDisjointSet(_graphaXHTJeV)
	});
})
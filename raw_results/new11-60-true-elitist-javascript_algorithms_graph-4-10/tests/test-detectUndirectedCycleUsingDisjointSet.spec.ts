export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _graphjqBrfOx = false;
		const _returnValueyRBG652 = await detectUndirectedCycleUsingDisjointSet(_graphjqBrfOx)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueUJogdD = []
		const _getAllVerticesUiaK1pR = () => { return _returnValueUJogdD };
		const _returnValueVE7fDl = undefined;
		const _getAllEdgesZoK9r0 = () => { return _returnValueVE7fDl };
		const _graphaJuhuo3 = {
			"getAllVertices": _getAllVerticesUiaK1pR,
		"getAllEdges": _getAllEdgesZoK9r0
	}
		const _returnValueuT9MxG = await detectUndirectedCycleUsingDisjointSet(_graphaJuhuo3)
	});
})
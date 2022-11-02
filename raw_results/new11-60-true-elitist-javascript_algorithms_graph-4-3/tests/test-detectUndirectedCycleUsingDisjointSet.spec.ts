export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuekEni5QQ = true;
		const _getAllVerticesV2FgCVj = () => { return _returnValuekEni5QQ };
		const _returnValueslnZ8qH = {
		
	}
		const _getAllEdgesbTrpyVj = () => { return _returnValueslnZ8qH };
		const _graphfXXxovM = {
			"getAllVertices": _getAllVerticesV2FgCVj,
		"getAllEdges": _getAllEdgesbTrpyVj
	}
		const _returnValueYzxz6c = await detectUndirectedCycleUsingDisjointSet(_graphfXXxovM)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuecE861RI = []
		const _getAllVerticesz9f0D07 = () => { return _returnValuecE861RI };
		const _returnValueBCbldUq = -0.6201789966666791;
		const _getAllEdgesyeJCEJ = () => { return _returnValueBCbldUq };
		const _graphNy7CJW7 = {
			"getAllVertices": _getAllVerticesz9f0D07,
		"getAllEdges": _getAllEdgesyeJCEJ
	}
		const _returnValueNBKQe2g = await detectUndirectedCycleUsingDisjointSet(_graphNy7CJW7)
	});
})
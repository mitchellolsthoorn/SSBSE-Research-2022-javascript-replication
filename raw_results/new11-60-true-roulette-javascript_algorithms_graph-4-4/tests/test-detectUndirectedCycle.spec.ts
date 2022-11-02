export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueSYMXS1p = true;
		const _getAllVerticesQzLygQn = () => { return _returnValueSYMXS1p };
		const _graphTFRAWSn = {
			"getAllVertices": _getAllVerticesQzLygQn
	}
		const _returnValueMO19PyS = await detectUndirectedCycle(_graphTFRAWSn)
	});
})
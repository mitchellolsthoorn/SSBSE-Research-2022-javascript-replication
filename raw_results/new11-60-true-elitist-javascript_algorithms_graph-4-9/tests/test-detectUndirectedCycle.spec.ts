export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueQ3mPqGp = null;
		const _getAllVerticeseY1uQ1V = () => { return _returnValueQ3mPqGp };
		const _graphr7K6bJ = {
			"getAllVertices": _getAllVerticeseY1uQ1V
	}
		const _returnValuesReUs7Z = await detectUndirectedCycle(_graphr7K6bJ)
	});
})
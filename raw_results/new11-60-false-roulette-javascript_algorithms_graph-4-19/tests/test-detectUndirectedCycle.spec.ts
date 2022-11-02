export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueS1lNkaM = null;
		const _getAllVerticesjn4KJZI = () => { return _returnValueS1lNkaM };
		const _graphu5w26o = {
			"getAllVertices": _getAllVerticesjn4KJZI
	}
		const _returnValuexQxtc7K = await detectUndirectedCycle(_graphu5w26o)
	});
})
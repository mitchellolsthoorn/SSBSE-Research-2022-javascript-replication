export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValue4tMhAQ = null;
		const _getAllVerticescDsiGN0 = () => { return _returnValue4tMhAQ };
		const _graphDqWSpqQ = {
			"getAllVertices": _getAllVerticescDsiGN0
	}
		const _returnValuefVQL9f = await detectUndirectedCycle(_graphDqWSpqQ)
	});
})
export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuebOTIbnE = false;
		const _getAllVerticesitBUdMl = () => { return _returnValuebOTIbnE };
		const _graphv2c28Oh = {
			"getAllVertices": _getAllVerticesitBUdMl
	}
		const _returnValueUDQhsrr = await detectUndirectedCycle(_graphv2c28Oh)
	});
})
export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuew6q1si9 = {
		
	}
		const _getAllVerticesnKVBPlW = () => { return _returnValuew6q1si9 };
		const _graphSZ654f2 = {
			"getAllVertices": _getAllVerticesnKVBPlW
	}
		const _returnValueIYHdj2x = await detectUndirectedCycle(_graphSZ654f2)
	});
})
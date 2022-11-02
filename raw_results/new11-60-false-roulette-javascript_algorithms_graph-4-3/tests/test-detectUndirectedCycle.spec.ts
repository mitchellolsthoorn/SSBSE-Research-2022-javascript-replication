export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuewWkXb4N = {
		
	}
		const _getAllVerticesGGqEPiK = () => { return _returnValuewWkXb4N };
		const _graphTOPw4QD = {
			"getAllVertices": _getAllVerticesGGqEPiK
	}
		const _returnValueBjSCDW5 = await detectUndirectedCycle(_graphTOPw4QD)
	});
})
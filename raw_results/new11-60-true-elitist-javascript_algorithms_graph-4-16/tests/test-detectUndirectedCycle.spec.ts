export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _getAllVerticesCb1FZ8i = undefined;
		const _graphL5yFZp = {
			"getAllVertices": _getAllVerticesCb1FZ8i
	}
		const _returnValueYvdY9EL = await detectUndirectedCycle(_graphL5yFZp)
	});
})
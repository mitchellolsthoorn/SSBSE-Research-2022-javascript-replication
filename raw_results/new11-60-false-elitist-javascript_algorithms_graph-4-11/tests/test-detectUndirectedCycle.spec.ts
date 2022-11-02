export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValuepkQV3fE = undefined;
		const _getAllVerticesrEEg1pn = () => { return _returnValuepkQV3fE };
		const _graphCOoPpGD = {
			"getAllVertices": _getAllVerticesrEEg1pn
	}
		const _returnValuevB4bI7 = await detectUndirectedCycle(_graphCOoPpGD)
	});
})
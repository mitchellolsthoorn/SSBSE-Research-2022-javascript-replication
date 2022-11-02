export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _arrayValuebjqtHRL = undefined;
		const _getAllVerticesKLFli2R = [_arrayValuebjqtHRL]
		const _graphB8BSVza = {
			"getAllVertices": _getAllVerticesKLFli2R
	}
		const _returnValuelOeFbZE = await detectUndirectedCycle(_graphB8BSVza)
	});
})
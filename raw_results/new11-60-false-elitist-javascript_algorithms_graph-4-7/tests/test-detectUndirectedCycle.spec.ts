export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueX69OwNu = "zQu4MyVuH3J";
		const _getAllVerticeslvKRUgn = () => { return _returnValueX69OwNu };
		const _graphown2YAy = {
			"getAllVertices": _getAllVerticeslvKRUgn
	}
		const _returnValuewMTPCVq = await detectUndirectedCycle(_graphown2YAy)
	});
})
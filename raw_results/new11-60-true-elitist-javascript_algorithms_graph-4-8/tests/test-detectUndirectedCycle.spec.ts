export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueJ24vyHZ = 1.1751255130988802;
		const _getAllVertices0lFHjP = () => { return _returnValueJ24vyHZ };
		const _graphuAO6CJn = {
			"getAllVertices": _getAllVertices0lFHjP
	}
		const _returnValueew8wv0 = await detectUndirectedCycle(_graphuAO6CJn)
	});
})
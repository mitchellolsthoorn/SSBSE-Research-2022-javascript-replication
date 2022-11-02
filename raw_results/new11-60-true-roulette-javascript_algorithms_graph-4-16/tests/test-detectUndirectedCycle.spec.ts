export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueQCvUnji = null;
		const _getAllVerticesbWXLbVt = () => { return _returnValueQCvUnji };
		const _graphMQPpQce = {
			"getAllVertices": _getAllVerticesbWXLbVt
	}
		const _returnValueHggj6Ji = await detectUndirectedCycle(_graphMQPpQce)
	});
})
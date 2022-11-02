export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueXpytIZP = null;
		const _getAllVerticesZUuNSiI = () => { return _returnValueXpytIZP };
		const _graphJY1263h = {
			"getAllVertices": _getAllVerticesZUuNSiI
	}
		const _returnValue0NNrX5 = await detectDirectedCycle(_graphJY1263h)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueaSfRi6D = []
		const _getAllVerticesyyTk7iC = () => { return _returnValueaSfRi6D };
		const _graphjj72B1h = {
			"getAllVertices": _getAllVerticesyyTk7iC
	}
		const _returnValueKkDQRv = await detectDirectedCycle(_graphjj72B1h)
	});
})
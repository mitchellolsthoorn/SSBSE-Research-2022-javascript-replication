export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueaUSZXAh = undefined;
		const _getAllVerticesChQ5KPq = () => { return _returnValueaUSZXAh };
		const _graphzCjnkSa = {
			"getAllVertices": _getAllVerticesChQ5KPq
	}
		const _returnValueZnIwg6t = await detectDirectedCycle(_graphzCjnkSa)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuexjz8iVu = []
		const _getAllVerticesxvQiBV = () => { return _returnValuexjz8iVu };
		const _graphVz6KwuX = {
			"getAllVertices": _getAllVerticesxvQiBV
	}
		const _returnValuecGT8Six = await detectDirectedCycle(_graphVz6KwuX)
	});
})
export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValuegO3iY0V = "iOTBROFJzhGKksBY55cbFb24UKgcNtCp5osjKhXVcF";
		const _getAllVertices87EQ4G = () => { return _returnValuegO3iY0V };
		const _graphWmVyZMf = {
			"getAllVertices": _getAllVertices87EQ4G
	}
		const _returnValuejRA7J31 = await detectDirectedCycle(_graphWmVyZMf)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValuejXO6Uvh = []
		const _getAllVerticesoI1zS7e = () => { return _returnValuejXO6Uvh };
		const _graphbFVz3IU = {
			"getAllVertices": _getAllVerticesoI1zS7e
	}
		const _returnValueVpjRYpB = await detectDirectedCycle(_graphbFVz3IU)
	});
})
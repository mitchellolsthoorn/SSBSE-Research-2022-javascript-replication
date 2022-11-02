export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueEjHa3dX = "wqVXIX1Ehf6HEFGnXriSIDrPAlk7nZN3N7q4pzXRGoqZZ";
		const _getAllVerticesrXMhFYU = () => { return _returnValueEjHa3dX };
		const _graphOmFeJhT = {
			"getAllVertices": _getAllVerticesrXMhFYU
	}
		const _returnValuenv4I6mc = await detectDirectedCycle(_graphOmFeJhT)
	});

	it('test for detectDirectedCycle', async () => {
		const _returnValueNtQypLz = []
		const _getAllVerticesAcKK6Mr = () => { return _returnValueNtQypLz };
		const _graphZc2Sdm8 = {
			"getAllVertices": _getAllVerticesAcKK6Mr
	}
		const _returnValuevfTlyCT = await detectDirectedCycle(_graphZc2Sdm8)
	});
})
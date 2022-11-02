export {}
import detectUndirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycle', () => {
	it('test for detectUndirectedCycle', async () => {
		const _returnValueFXlHR77 = "TdtjJU4Eylta";
		const _getAllVerticestdJw9Cs = () => { return _returnValueFXlHR77 };
		const _graphDGBxVkK = {
			"getAllVertices": _getAllVerticestdJw9Cs
	}
		const _returnValueUvHBtwP = await detectUndirectedCycle(_graphDGBxVkK)
	});
})
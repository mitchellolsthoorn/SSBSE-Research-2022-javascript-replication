export {}
import topologicalSort from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/topological-sorting/topologicalSort.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('topologicalSort', () => {
	it('test for topologicalSort', async () => {
		const _graphvm7ucmK = "U2zdXlELLicB2CAtvgErhG4vzEcbcxZqhzs8S5BWp6MlbjMM8xC9twzhNt4A81FhuiQ0mhgXtQC";
		const _returnValueHXQSuNy = await topologicalSort(_graphvm7ucmK)
	});
})
export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphFCqBWjn = "1bVWRMTBR61A33Rka2JUG7yc3CAJ5Md2ABkytwQux99VwjycFUy2h10EWyrETmQO4XaCe5rOC9NLAdz2rh48M4ODTyIr39bihi";
		const _returnValueXOfodAq = await eulerianPath(_graphFCqBWjn)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedAb5HYVK = false;
		const _graphcZc4NTN = new Graph(_isDirectedAb5HYVK)
		const _returnValueYCiX49J = await _graphcZc4NTN.getVerticesIndices()
		const _returnValueE9utLMo = await eulerianPath(_graphcZc4NTN)
	});
})
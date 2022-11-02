export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphSJHj9M1 = 1.8021593703655228;
		const _startVertexZF3B4ne = undefined;
		const _originalCallbacksIlzDppc = {
		
	}
		const _returnValueYyWcOWr = await breadthFirstSearch(_graphSJHj9M1, _startVertexZF3B4ne, _originalCallbacksIlzDppc)
	});
})
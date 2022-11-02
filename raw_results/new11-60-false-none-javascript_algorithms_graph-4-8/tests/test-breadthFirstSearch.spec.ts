export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphksrhL7l = -4.918093852047311;
		const _startVertexjIubTv9 = "YIgUFmV8nlgdw89vS6r43a9fgFvUCe3osTOHjN1aN48m44of5bCBHTZbxCnF6jhR0HdGkggKGvi3Z1bgFr3";
		const _returnValueqhIyay = true;
		const _originalCallbacksjk9HYyK = () => { return _returnValueqhIyay };
		const _returnValueUDEBwx9 = await breadthFirstSearch(_graphksrhL7l, _startVertexjIubTv9, _originalCallbacksjk9HYyK)
	});
})
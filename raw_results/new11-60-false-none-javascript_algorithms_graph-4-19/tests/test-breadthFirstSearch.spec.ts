export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueTof0ZSF = "FJKEetlQxIf8gjvXvBIy4FoxGQOU9enlgJJCjWqFwQGWqVUEo4WdEBE4IfhKkPza6iEuOo7oezd7w";
		const _graphpIPbtac = () => { return _returnValueTof0ZSF };
		const _returnValueS5m28D6 = 6.566872204653301;
		const _startVertexG5XQI0 = () => { return _returnValueS5m28D6 };
		const _originalCallbackspLe7P9q = false;
		const _returnValueZDoX6v7 = await breadthFirstSearch(_graphpIPbtac, _startVertexG5XQI0, _originalCallbackspLe7P9q)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphNn8G54o = true;
		const _startVertexN7O4045 = "X6cqydw";
		const _originalCallbacksbrt9iOL = undefined;
		const _returnValueCWzUWtB = await breadthFirstSearch(_graphNn8G54o, _startVertexN7O4045, _originalCallbacksbrt9iOL)
	});
})
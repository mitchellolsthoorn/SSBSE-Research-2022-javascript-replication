export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphR97LXqu = -4.931697962989004;
		const _startVertexw7jm0UG = -5.3132642051721755;
		const _originalCallbacksR4SrPuK = null;
		const _returnValueX9zB8Ql = await breadthFirstSearch(_graphR97LXqu, _startVertexw7jm0UG, _originalCallbacksR4SrPuK)
	});

	it('test for breadthFirstSearch', async () => {
		const _graphJ0iE3wR = undefined;
		const _startVertexc3HLXC = {
		
	}
		const _originalCallbacksOkCqEt8 = undefined;
		const _returnValueGumXRx0 = await breadthFirstSearch(_graphJ0iE3wR, _startVertexc3HLXC, _originalCallbacksOkCqEt8)
	});
})
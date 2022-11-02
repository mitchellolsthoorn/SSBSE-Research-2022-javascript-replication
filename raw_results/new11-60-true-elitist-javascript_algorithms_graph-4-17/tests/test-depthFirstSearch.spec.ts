export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _returnValuebh8EeQk = undefined;
		const _graphQk98oaf = () => { return _returnValuebh8EeQk };
		const _startVertexXIPnTWn = undefined;
		const _callbacksPOoGJF4 = true;
		const _returnValueStZt4aP = await depthFirstSearch(_graphQk98oaf, _startVertexXIPnTWn, _callbacksPOoGJF4)
	});

	it('test for depthFirstSearch', async () => {
		const _graphzqhgXZK = undefined;
		const _startVertexYGhjIHZ = "AE4JhVX5zPAM7oboYpKlvodHoDDQ6SDrP6dUSP4ZhCdHmyZjTYmzHlrJ666aMN7ZNTnxKrGotOcH6TG";
		const _arrayValuemiZYukv = {
		
	}
		const _arrayValueQ5r8mR = "BoBX5rb2BmZrqUYWQ57dqt";
		const _callbacksrDzmN23 = [_arrayValuemiZYukv, _arrayValueQ5r8mR]
		const _returnValueQ9mBAS = await depthFirstSearch(_graphzqhgXZK, _startVertexYGhjIHZ, _callbacksrDzmN23)
	});
})
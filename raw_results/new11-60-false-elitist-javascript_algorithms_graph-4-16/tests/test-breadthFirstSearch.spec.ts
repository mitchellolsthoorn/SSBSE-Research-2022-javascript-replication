export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphzQQs6w4 = null;
		const _startVertexSzX1clQ = undefined;
		const _originalCallbacksTzTKJe0 = undefined;
		const _returnValueKVVOilt = await breadthFirstSearch(_graphzQQs6w4, _startVertexSzX1clQ, _originalCallbacksTzTKJe0)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueXZ8dj63 = true;
		const _arrayValueuSlfPYX = true;
		const _arrayValueDvumMnW = "TuF5DQRNJtJmOSoSBeHgSyPPS9nLPCpSxiUbaQXNW3FrTpMIBd7oJXy6srtMqCxWmG316zYoyqFpwitWDk";
		const _returnValueBjDRidY = [_arrayValueXZ8dj63, _arrayValueuSlfPYX, _arrayValueDvumMnW]
		const _getNeighbors94DvSD = () => { return _returnValueBjDRidY };
		const _graphR8KM8gF = {
			"getNeighbors": _getNeighbors94DvSD
	}
		const _startVertexKY6VX7c = -6.616988052295033;
		const _originalCallbacksKU3O0kI = undefined;
		const _returnValueanH6qZ5 = await breadthFirstSearch(_graphR8KM8gF, _startVertexKY6VX7c, _originalCallbacksKU3O0kI)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueaG4OQWW = []
		const _getNeighborsivFsK2m = () => { return _returnValueaG4OQWW };
		const _graphwFNdO80 = {
			"getNeighbors": _getNeighborsivFsK2m
	}
		const _startVertexQFtVkEu = true;
		const _returnValueL1pplWx = 4.749375746599359;
		const _originalCallbacksKxVFcCo = () => { return _returnValueL1pplWx };
		const _returnValuebViEAex = await breadthFirstSearch(_graphwFNdO80, _startVertexQFtVkEu, _originalCallbacksKxVFcCo)
	});
})
export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValueGivJltN = undefined;
		const _returnValueeBqcq7B = [_arrayValueGivJltN]
		const _getNeighborspRKLUra = () => { return _returnValueeBqcq7B };
		const _graphQL12ibV = {
			"getNeighbors": _getNeighborspRKLUra
	}
		const _startVertexJDgbgX = "4EVhVWl1trzWkhwI6aayilSriDFIVoToJftvmnCxULo780OODV1bU2GLXjNlXzICJOIiGkoQobADZRRKdSjpy4N";
		const _arrayValuemgh4P5o = null;
		const _arrayValueEgGjFo3 = null;
		const _returnValuewHJZuQc = [_arrayValuemgh4P5o, _arrayValueEgGjFo3]
		const _returnValueqvvxkpR = () => { return _returnValuewHJZuQc };
		const _originalCallbacksgYSBbtD = () => { return _returnValueqvvxkpR };
		const _returnValue2XkaVD = await breadthFirstSearch(_graphQL12ibV, _startVertexJDgbgX, _originalCallbacksgYSBbtD)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuelXXS4Bl = []
		const _getNeighborsrlaLIL2 = () => { return _returnValuelXXS4Bl };
		const _graphWynpPUY = {
			"getNeighbors": _getNeighborsrlaLIL2
	}
		const _startVertexozjufeZ = false;
		const _originalCallbackseys4nPR = undefined;
		const _returnValueXojBK5 = await breadthFirstSearch(_graphWynpPUY, _startVertexozjufeZ, _originalCallbackseys4nPR)
	});
})
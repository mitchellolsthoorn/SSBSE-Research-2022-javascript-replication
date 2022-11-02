export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuePEc2F5w = false;
		const _getNeighborsYb20kfN = () => { return _returnValuePEc2F5w };
		const _graph6V1guV = {
			"getNeighbors": _getNeighborsYb20kfN
	}
		const _startVertexRh7WUyq = "gayhNkBpGDN862Ie3I0UVJlJwHTrrC1SfqMPJHeC4qMn4mSM7PbsX9p2PQxupKl6c1T6avUV";
		const _originalCallbacksh9OqJJ5 = undefined;
		const _returnValueIJzGh4P = await breadthFirstSearch(_graph6V1guV, _startVertexRh7WUyq, _originalCallbacksh9OqJJ5)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueN5ZKRd6 = "rvLn3Y6";
		const _arrayValueKbbeEWP = "nutbNsIcm5QS47NRJZN66wHOdXSuK6cOX3e6zJotRcn9ddQFCr1jiN1WUAKJdleqj6T5J";
		const _arrayValueBOrBRK3 = false;
		const _returnValuezQGehWZ = [_arrayValueN5ZKRd6, _arrayValueKbbeEWP, _arrayValueBOrBRK3]
		const _getNeighborsBRdFFNm = () => { return _returnValuezQGehWZ };
		const _graphOJJy0yX = {
			"getNeighbors": _getNeighborsBRdFFNm
	}
		const _startVertexiL6UTWu = {
		
	}
		const _originalCallbacksH4XBSY1 = undefined;
		const _returnValueMmTHYXb = await breadthFirstSearch(_graphOJJy0yX, _startVertexiL6UTWu, _originalCallbacksH4XBSY1)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueYkhTu3H = []
		const _getNeighborsseeladf = () => { return _returnValueYkhTu3H };
		const _graphf0sO3Gk = {
			"getNeighbors": _getNeighborsseeladf
	}
		const _startVertexHzEbaXT = 8.389298920590942;
		const _originalCallbacksKVTets = undefined;
		const _returnValueK0OzTh3 = await breadthFirstSearch(_graphf0sO3Gk, _startVertexHzEbaXT, _originalCallbacksKVTets)
	});
})
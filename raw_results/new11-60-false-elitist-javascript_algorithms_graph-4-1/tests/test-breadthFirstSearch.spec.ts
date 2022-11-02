export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueVOMoAJa = 8.516727849128593;
		const _getNeighborsP4D2p82 = () => { return _returnValueVOMoAJa };
		const _graphYbBKxbg = {
			"getNeighbors": _getNeighborsP4D2p82
	}
		const _startVertexzEJD7l0 = "TuMfVB1";
		const _originalCallbacksOv4cirC = null;
		const _returnValueYEkE1vY = await breadthFirstSearch(_graphYbBKxbg, _startVertexzEJD7l0, _originalCallbacksOv4cirC)
	});

	it('test for breadthFirstSearch', async () => {
		const _getNeighborsJ2cJj0M = false;
		const _graphApyXiCJ = {
			"getNeighbors": _getNeighborsJ2cJj0M
	}
		const _startVertexQwdRNpf = undefined;
		const _originalCallbacksBGbbC5d = []
		const _returnValueiP4XLNj = await breadthFirstSearch(_graphApyXiCJ, _startVertexQwdRNpf, _originalCallbacksBGbbC5d)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuet1wwFKd = null;
		const _arrayValuett0pUNJ = "LHHprTaMpdyz0nfZnk77gyqL7HWCDWmntKfiex9XLK1R5rIrFI8sn1XG7DG";
		const _arrayValuedVRqO4U = "MhKONLxB8FgKwlmMTOYUukLj9mxYg";
		const _returnValueTRsibxX = [_arrayValuet1wwFKd, _arrayValuett0pUNJ, _arrayValuedVRqO4U]
		const _getNeighborsQVByTQx = () => { return _returnValueTRsibxX };
		const _graphxNzBPD = {
			"getNeighbors": _getNeighborsQVByTQx
	}
		const _startVertexZJWaOI4 = "2ctlHxfB9xygq0aBv2oJ";
		const _returnValuevxgJCPP = true;
		const _originalCallbacksu933UO3 = () => { return _returnValuevxgJCPP };
		const _returnValue3vW5J3 = await breadthFirstSearch(_graphxNzBPD, _startVertexZJWaOI4, _originalCallbacksu933UO3)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueqCXcQIa = []
		const _getNeighborsDgbC9m = () => { return _returnValueqCXcQIa };
		const _graphoCuvto3 = {
			"getNeighbors": _getNeighborsDgbC9m
	}
		const _startVertexDkavNdU = -2.1407029639033226;
		const _originalCallbacksrgFUyjW = undefined;
		const _returnValuelzj6dQ = await breadthFirstSearch(_graphoCuvto3, _startVertexDkavNdU, _originalCallbacksrgFUyjW)
	});
})
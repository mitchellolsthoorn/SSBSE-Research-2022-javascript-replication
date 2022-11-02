export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueOckHcA = 9.795940242536933;
		const _graphSL2iqda = () => { return _returnValueOckHcA };
		const _startVertexef14xCZ = false;
		const _originalCallbacksVr1cPlq = null;
		const _returnValuevqFf5KS = await breadthFirstSearch(_graphSL2iqda, _startVertexef14xCZ, _originalCallbacksVr1cPlq)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueU0SFQBE = null;
		const _getNeighborsuaJVQ3h = () => { return _returnValueU0SFQBE };
		const _graph9a5oLJ = {
			"getNeighbors": _getNeighborsuaJVQ3h
	}
		const _startVertexJXDlMy8 = undefined;
		const _arrayValueMi8HVPU = "WiauHl1ONg1W7GKfRxzwpWEFTyteY5DG6FIoPqU";
		const _arrayValueBkLmrJF = undefined;
		const _arrayValueJ3FyJbd = null;
		const _arrayValueo6sXbge = [_arrayValueBkLmrJF, _arrayValueJ3FyJbd]
		const _originalCallbacksMyh5IRf = [_arrayValueMi8HVPU, _arrayValueo6sXbge]
		const _returnValueEIiOg3Q = await breadthFirstSearch(_graph9a5oLJ, _startVertexJXDlMy8, _originalCallbacksMyh5IRf)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuecwsl4bd = 6.950931140567903;
		const _graphXwr1x0s = new GraphVertex(_valuecwsl4bd)
		const _arrayValuebIpv3K = undefined;
		const _requiredEdgeEtjbQ0V = [_arrayValuebIpv3K]
		const _returnValueJCUvy2x = await _graphXwr1x0s.hasEdge(_requiredEdgeEtjbQ0V)
		const _vertexBPmw7Qy = -8.375229897248756;
		const _returnValuezbDchIz = await _graphXwr1x0s.findEdge(_vertexBPmw7Qy)
		const _returnValuejjS9OJ9 = await _graphXwr1x0s.getNeighbors()
		const _startVertexGwcnh3K = "qIpRbXnzOUvpXKucnFqAjpYSma8GTSwZulgeXlNpg";
		const _originalCallbacksxY3gV0 = undefined;
		const _returnValueN4rUBN = await breadthFirstSearch(_graphXwr1x0s, _startVertexGwcnh3K, _originalCallbacksxY3gV0)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueh4d0Nku = undefined;
		const _arrayValueORuqJAS = "MvDDMXuX5vSdpdK10alM1rtgYfpJop6lp";
		const _arrayValuerGopsSz = "kk2FuhDK4GBBKv67vaOWMwihvy7Dh9zu";
		const _arrayValuenIg1BJY = null;
		const _returnValuebsRo4r1 = [_arrayValueh4d0Nku, _arrayValueORuqJAS, _arrayValuerGopsSz, _arrayValuenIg1BJY]
		const _getNeighbors910UAn = () => { return _returnValuebsRo4r1 };
		const _grapheiCDhp = {
			"getNeighbors": _getNeighbors910UAn
	}
		const _startVertexcwLTdbF = null;
		const _originalCallbackstYjyy5O = undefined;
		const _returnValueIwMDGS6 = await breadthFirstSearch(_grapheiCDhp, _startVertexcwLTdbF, _originalCallbackstYjyy5O)
	});
})
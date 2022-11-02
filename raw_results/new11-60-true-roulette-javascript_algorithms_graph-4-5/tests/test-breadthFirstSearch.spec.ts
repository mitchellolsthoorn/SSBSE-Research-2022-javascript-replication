export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuevXQenjv = undefined;
		const _graphe95kSLA = () => { return _returnValuevXQenjv };
		const _startVertexbgDYIH7 = undefined;
		const _arrayValuevLavVWo = null;
		const _arrayValueQosxc8q = {
		
	}
		const _arrayValueRVNweV8 = undefined;
		const _originalCallbackse8Qd25p = [_arrayValuevLavVWo, _arrayValueQosxc8q, _arrayValueRVNweV8]
		const _returnValuejrOl4X = await breadthFirstSearch(_graphe95kSLA, _startVertexbgDYIH7, _originalCallbackse8Qd25p)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueOaEu2kG = false;
		const _arrayValuebySLnC8 = false;
		const _arrayValueDnHNaTI = undefined;
		const _returnValuekQPQhVR = [_arrayValueOaEu2kG, _arrayValuebySLnC8, _arrayValueDnHNaTI]
		const _getNeighborswHW4FLb = () => { return _returnValuekQPQhVR };
		const _graphLHFq7ho = {
			"getNeighbors": _getNeighborswHW4FLb
	}
		const _arrayValuecgvN2Mp = -3.5327845644068425;
		const _arrayValueyZqjbvG = []
		const _returnValuehRH03My = null;
		const _arrayValuelsxuB7I = () => { return _returnValuehRH03My };
		const _startVertexT6xJmD6 = [_arrayValuecgvN2Mp, _arrayValueyZqjbvG, _arrayValuelsxuB7I]
		const _originalCallbackseXM5REG = {
		
	}
		const _returnValueeNKaqVZ = await breadthFirstSearch(_graphLHFq7ho, _startVertexT6xJmD6, _originalCallbackseXM5REG)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueNCR4DlC = false;
		const _graphm0w6Jtd = new GraphVertex(_valueNCR4DlC)
		const _returnValueChKbRh = await _graphm0w6Jtd.deleteAllEdges()
		const _startVertexbGROhm = {
		
	}
		const _originalCallbacksrAW1cAF = undefined;
		const _returnValuemvx5wPc = await breadthFirstSearch(_graphm0w6Jtd, _startVertexbGROhm, _originalCallbacksrAW1cAF)
	});
})
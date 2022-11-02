export {}
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _valueK2MuYxA = 7.583562910185009;
		const _graphqsadZym = new GraphVertex(_valueK2MuYxA)
		const _requiredEdgeRO4v4zd = "sohc2fVtaCyYJBn7tOy";
		const _returnValuemUqd6ly = await _graphqsadZym.hasEdge(_requiredEdgeRO4v4zd)
		const _returnValueaexf3PN = await _graphqsadZym.deleteAllEdges()
		const _returnValue0XxeQb = await _graphqsadZym.getNeighbors()
		const _returnValueyeWNzvs = await _graphqsadZym.getEdges()
		const _returnValueMK5USrL = await _graphqsadZym.deleteAllEdges()
		const _startVertexu4jcqvc = null;
		const _originalCallbacksIsoIjfM = undefined;
		const _returnValuemmHgMn = await breadthFirstSearch(_graphqsadZym, _startVertexu4jcqvc, _originalCallbacksIsoIjfM)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuejmaATOO = null;
		const _returnValueoVoIQ79 = [_arrayValuejmaATOO]
		const _getNeighborstb1XILI = () => { return _returnValueoVoIQ79 };
		const _graphzBDMWjZ = {
			"getNeighbors": _getNeighborstb1XILI
	}
		const _startVertexzhv8aI = true;
		const _originalCallbacksSoN7bi8 = undefined;
		const _returnValuepjdsZrr = await breadthFirstSearch(_graphzBDMWjZ, _startVertexzhv8aI, _originalCallbacksSoN7bi8)
	});
})
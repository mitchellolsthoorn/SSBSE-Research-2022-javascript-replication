export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueCMofGct = "esFguf5UmCBnkKLOtC73rmty3OOLbuWEO8vo5W1Klfc4KnQ";
		const _getNeighborsFp7YefZ = () => { return _returnValueCMofGct };
		const _graphLQbYQWT = {
			"getNeighbors": _getNeighborsFp7YefZ
	}
		const _startVertexk6qbr1p = -5.326251492743463;
		const _returnValuen2NeKi1 = false;
		const _originalCallbacksRZcwRM0 = () => { return _returnValuen2NeKi1 };
		const _returnValueLm1g8Mo = await breadthFirstSearch(_graphLQbYQWT, _startVertexk6qbr1p, _originalCallbacksRZcwRM0)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueWjECCiV = "G2x2QbtavuywhVqdOGooDVw4aTsowvXtaxcd6";
		const _arrayValueX8Jr4jT = -6.247561351606025;
		const _returnValuetnzKcb2 = [_arrayValueWjECCiV, _arrayValueX8Jr4jT]
		const _getNeighborsClFJrjv = () => { return _returnValuetnzKcb2 };
		const _graphtBx4S3W = {
			"getNeighbors": _getNeighborsClFJrjv
	}
		const _startVertexpIXg6AJ = "mdVPYCDyPmm7wpb9L9o61P0kXafBADIs43NCJuGsXFKCDCyLbeyRmHgdQTUgc208tBmXErY";
		const _originalCallbackszBA0gaa = []
		const _returnValueuijmdYw = await breadthFirstSearch(_graphtBx4S3W, _startVertexpIXg6AJ, _originalCallbackszBA0gaa)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueC7wzvmO = "BKHa02CrmaV8fjEFnpC1YLd50miP4lEOIlBgtOcLmYLzo771xN9LbvVEEeL2d0TFR";
		const _graphLQguicj = new GraphVertex(_valueC7wzvmO)
		const _returnValueFXwn7FI = await _graphLQguicj.getKey()
		const _requiredEdgeZzNZDIJ = null;
		const _returnValueykKYkyN = await _graphLQguicj.hasEdge(_requiredEdgeZzNZDIJ)
		const _returnValue1Zbgx2 = await _graphLQguicj.deleteAllEdges()
		const _vertexFCrEko = {
		
	}
		const _returnValuewueAjjK = await _graphLQguicj.findEdge(_vertexFCrEko)
		const _returnValueALkshTJ = await _graphLQguicj.deleteAllEdges()
		const _startVertexgqGnZIb = null;
		const _originalCallbacksx3M4JOw = undefined;
		const _returnValueN6Kw5JI = await breadthFirstSearch(_graphLQguicj, _startVertexgqGnZIb, _originalCallbacksx3M4JOw)
	});
})
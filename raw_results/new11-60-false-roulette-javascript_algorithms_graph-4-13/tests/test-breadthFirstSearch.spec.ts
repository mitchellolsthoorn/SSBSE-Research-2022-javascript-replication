export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphFdp8X7a = true;
		const _startVertexop6Sh4c = 1.7292225992190815;
		const _originalCallbacksmKixRkX = undefined;
		const _returnValuekkcjVdD = await breadthFirstSearch(_graphFdp8X7a, _startVertexop6Sh4c, _originalCallbacksmKixRkX)
	});

	it('test for breadthFirstSearch', async () => {
		const _values2x2nPQ = false;
		const _graphI9fmmJD = new GraphVertex(_values2x2nPQ)
		const _vertexFNuL0l8 = false;
		const _returnValuekD9SXV6 = await _graphI9fmmJD.findEdge(_vertexFNuL0l8)
		const _startVertexSVLIMUG = false;
		const _originalCallbackseufx5yP = []
		const _returnValuerr4Uz2K = await breadthFirstSearch(_graphI9fmmJD, _startVertexSVLIMUG, _originalCallbackseufx5yP)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValuekYWK3LK = []
		const _returnValueoZn1gF = [_arrayValuekYWK3LK]
		const _getNeighborsAgusXJH = () => { return _returnValueoZn1gF };
		const _graphyqdMHUy = {
			"getNeighbors": _getNeighborsAgusXJH
	}
		const _startVertexJWtRIW = null;
		const _originalCallbacksXLpOb7C = undefined;
		const _returnValueGj46ahg = await breadthFirstSearch(_graphyqdMHUy, _startVertexJWtRIW, _originalCallbacksXLpOb7C)
	});
})
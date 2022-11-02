export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValuewCFo4BW = "Q";
		const _graph9Megf4 = () => { return _returnValuewCFo4BW };
		const _startVertexGvVWcEp = -0.6662815637264714;
		const _originalCallbacksBWqT33 = undefined;
		const _returnValueiasQJIo = await breadthFirstSearch(_graph9Megf4, _startVertexGvVWcEp, _originalCallbacksBWqT33)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueUEraazh = []
		const _getNeighborsmSaTYV1 = () => { return _returnValueUEraazh };
		const _graphtzN71dn = {
			"getNeighbors": _getNeighborsmSaTYV1
	}
		const _startVertexEhsL2Az = -8.735652398240415;
		const _originalCallbacksTQAzFcR = undefined;
		const _returnValueaoOnwjP = await breadthFirstSearch(_graphtzN71dn, _startVertexEhsL2Az, _originalCallbacksTQAzFcR)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueOWXEZh9 = -6.849302336524916;
		const _graphoxqgJUq = new GraphVertex(_valueOWXEZh9)
		const _returnValue7hx4uA = undefined;
		const _edgePP3xzUW = () => { return _returnValue7hx4uA };
		const _returnValueWAT81lL = await _graphoxqgJUq.addEdge(_edgePP3xzUW)
		const _returnValuetkNrA1B = await _graphoxqgJUq.getNeighbors()
		const _returnValueoE4cB0 = await _graphoxqgJUq.getEdges()
		const _vertexsNFa6KI = false;
		const _returnValuepJrJ3h5 = await _graphoxqgJUq.hasNeighbor(_vertexsNFa6KI)
		const _returnValueKj18DGN = undefined;
		const _startVertexBw9XqR4 = () => { return _returnValueKj18DGN };
		const _originalCallbacksEkOqGpm = undefined;
		const _returnValueqY6iEmL = await breadthFirstSearch(_graphoxqgJUq, _startVertexBw9XqR4, _originalCallbacksEkOqGpm)
	});
})
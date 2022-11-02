export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValuexSpLh58 = -9.34775086772054;
		const _arrayValueECQCa1N = "r7e1LfLgPTE1osoUEW8y1FiRDnmFxY";
		const _graphY7qU7AZ = [_arrayValuexSpLh58, _arrayValueECQCa1N]
		const _startVertexV0bIlAt = -7.964021380318854;
		const _originalCallbackscbumRc = undefined;
		const _returnValuetyzwi6Q = await breadthFirstSearch(_graphY7qU7AZ, _startVertexV0bIlAt, _originalCallbackscbumRc)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueJcQy9g = true;
		const _arrayValueFEIptpB = {
		
	}
		const _valueGx2jXXG = [_arrayValueJcQy9g, _arrayValueFEIptpB]
		const _graphJfzDFzE = new GraphVertex(_valueGx2jXXG)
		const _returnValuerAmUZHo = await _graphJfzDFzE.getNeighbors()
		const _edgeEyEm2z8 = null;
		const _returnValuenDKeaBD = await _graphJfzDFzE.deleteEdge(_edgeEyEm2z8)
		const _vertexKN2QRhW = undefined;
		const _returnValueHFzNabJ = await _graphJfzDFzE.findEdge(_vertexKN2QRhW)
		const _startVertexU9y9LEJ = null;
		const _originalCallbacksx9jrCHv = {
		
	}
		const _returnValueesGdDWq = await breadthFirstSearch(_graphJfzDFzE, _startVertexU9y9LEJ, _originalCallbacksx9jrCHv)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueMmvszlg = {
		
	}
		const _graphTwVejr = new GraphVertex(_valueMmvszlg)
		const _returnValueccao2EY = await _graphTwVejr.getKey()
		const _vertexBVtCls2 = 2.17415550883622;
		const _returnValueIbkCNYQ = await _graphTwVejr.hasNeighbor(_vertexBVtCls2)
		const _edgeKRiqCnD = {
		
	}
		const _returnValueoPMUK6v = await _graphTwVejr.addEdge(_edgeKRiqCnD)
		const _startVertexSajAsJo = undefined;
		const _originalCallbacksloJlxkg = undefined;
		const _returnValuesfdLypR = await breadthFirstSearch(_graphTwVejr, _startVertexSajAsJo, _originalCallbacksloJlxkg)
	});
})
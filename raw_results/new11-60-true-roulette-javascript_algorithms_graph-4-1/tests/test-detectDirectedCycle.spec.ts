export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueeJ6EZaX = null;
		const _getAllVerticesskPgOB0 = [_arrayValueeJ6EZaX]
		const _graphBrZtoAP = {
			"getAllVertices": _getAllVerticesskPgOB0
	}
		const _returnValues5ABMVS = await detectDirectedCycle(_graphBrZtoAP)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedYOxUyS0 = true;
		const _graphfRFvez9 = new Graph(_isDirectedYOxUyS0)
		const _returnValueJRSz9vV = await _graphfRFvez9.getVerticesIndices()
		const _arrayValueWwIXw9Z = "q3oml6AAcMMwryW4vrm9fIyVxCnVZDUHbVjpdTcR2uvc4hTXXa";
		const _arrayValuezHimUbv = false;
		const _arrayValueWAi1VdI = -5.002179813872763;
		const _vertexKeyE8yxfPT = [_arrayValueWwIXw9Z, _arrayValuezHimUbv, _arrayValueWAi1VdI]
		const _returnValueYccBloT = await _graphfRFvez9.getVertexByKey(_vertexKeyE8yxfPT)
		const _returnValueIF7j1O = await detectDirectedCycle(_graphfRFvez9)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedlWDmnn = false;
		const _graphUbcTZDF = new Graph(_isDirectedlWDmnn)
		const _values1U0eZS = false;
		const _newVertexn3BZ5fH = new GraphVertex(_values1U0eZS)
		const _returnValueFyA1DpD = await _newVertexn3BZ5fH.getEdges()
		const _returnValueTj0V7u2 = false;
		const _callbackeYKcPh0 = () => { return _returnValueTj0V7u2 };
		const _returnValueCP6Lw0k = await _newVertexn3BZ5fH.toString(_callbackeYKcPh0)
		const _returnValueW6gc0DS = await _graphUbcTZDF.addVertex(_newVertexn3BZ5fH)
		const _returnValuejz4nFQ7 = await _graphUbcTZDF.getAllEdges()
		const _returnValueTqY9nLU = await detectDirectedCycle(_graphUbcTZDF)
	});
})
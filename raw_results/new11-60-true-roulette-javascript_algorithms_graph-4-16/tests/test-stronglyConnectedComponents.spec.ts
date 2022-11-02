export {}
import stronglyConnectedComponents from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/strongly-connected-components/stronglyConnectedComponents.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('stronglyConnectedComponents', () => {
	it('test for stronglyConnectedComponents', async () => {
		const _arrayValueVYR3fW = -3.4953822711265694;
		const _arrayValuem6emZiv = [_arrayValueVYR3fW]
		const _graphSBPXZTJ = [_arrayValuem6emZiv]
		const _returnValueCxBjoc9 = await stronglyConnectedComponents(_graphSBPXZTJ)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedYPfevUx = false;
		const _graphr4T1czl = new Graph(_isDirectedYPfevUx)
		const _returnValueCcneDs3 = await _graphr4T1czl.getAdjacencyMatrix()
		const _returnValueNNxIMz5 = await stronglyConnectedComponents(_graphr4T1czl)
	});

	it('test for stronglyConnectedComponents', async () => {
		const _isDirectedsNopZW = true;
		const _graphEcFyyR = new Graph(_isDirectedsNopZW)
		const _valuerrdg2O = null;
		const _newVertexlTfbRHG = new GraphVertex(_valuerrdg2O)
		const _vertexWD3znBy = undefined;
		const _returnValueRBfmLWU = await _newVertexlTfbRHG.findEdge(_vertexWD3znBy)
		const _returnValuegrI1N7Y = await _newVertexlTfbRHG.getDegree()
		const _returnValuebkTou5n = await _graphEcFyyR.addVertex(_newVertexlTfbRHG)
		const _returnValuekxn6kUn = await _graphEcFyyR.getAllVertices()
		const _returnValuexnTXdIT = await stronglyConnectedComponents(_graphEcFyyR)
	});
})
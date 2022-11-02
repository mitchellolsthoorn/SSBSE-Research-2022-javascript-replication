export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _graphP3o877W = []
		const _returnValuevi36BwB = await detectDirectedCycle(_graphP3o877W)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedvQ30FY = true;
		const _graphiK7ZSQW = new Graph(_isDirectedvQ30FY)
		const _returnValueBiMKniL = await _graphiK7ZSQW.getAllVertices()
		const _returnValuegzYrGPb = await _graphiK7ZSQW.getAllEdges()
		const _returnValueozx8fBP = await detectDirectedCycle(_graphiK7ZSQW)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedRL5c2I6 = false;
		const _graphLzMLQ8U = new Graph(_isDirectedRL5c2I6)
		const _returnValueEyD3e99 = await _graphLzMLQ8U.getAllEdges()
		const _returnValueKg9cftl = undefined;
		const _getKeyCg6QebP = () => { return _returnValueKg9cftl };
		const _newVertexfbfzkIY = {
			"getKey": _getKeyCg6QebP
	}
		const _returnValueuMpzk3m = await _graphLzMLQ8U.addVertex(_newVertexfbfzkIY)
		const _returnValueHcX4Vp = await _graphLzMLQ8U.getVerticesIndices()
		const _arrayValueMwbAHcm = "5flnyVJQkKBMcZzjFacGsD8Q6prKeBADJzf5v7e9YBtxqUSp955woO1sOFBJSzxuZUUzcHFMFG24hXyAkbgeglBX2gjYBS2NFt";
		const _arrayValueWJYPjiV = -8.034642463755642;
		const _returnValuedkk8lLJ = undefined;
		const _arrayValuesR47RTd = () => { return _returnValuedkk8lLJ };
		const _arrayValueDuMF7Z1 = true;
		const _arrayValuepb3SOc = null;
		const _arrayValueEl5xBZS = true;
		const _arrayValueVO7CPXx = [_arrayValueDuMF7Z1, _arrayValuepb3SOc, _arrayValueEl5xBZS]
		const _arrayValueVJVFkK = [_arrayValueWJYPjiV, _arrayValuesR47RTd, _arrayValueVO7CPXx]
		const _arrayValueP5oO0rC = "VDRoJ1oFIWixU6ROzbougvbjizEscIQv4V6galuPotkHyhGY7JjIuS";
		const _vertexKeyjNcQBk9 = [_arrayValueMwbAHcm, _arrayValueVJVFkK, _arrayValueP5oO0rC]
		const _returnValuea1bkDH8 = await _graphLzMLQ8U.getVertexByKey(_vertexKeyjNcQBk9)
		const _returnValueHe3kOX = await detectDirectedCycle(_graphLzMLQ8U)
	});
})
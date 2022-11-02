export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValuef1k6vDH = "5v2QwFiqoxXlGqRUyxmeYQjq40qDr3ZfM68eSppI5MUbCvI";
		const _arrayValueTQownD5 = -8.688153031036801;
		const _arrayValueow6wpl0 = []
		const _returnValuefmi9yCq = "UsyljUSpJQkT7EJpKDSoboIM48fiMaKm";
		const _arrayValueXfyTR6 = () => { return _returnValuefmi9yCq };
		const _arrayValuedp5zsI5 = [_arrayValueow6wpl0, _arrayValueXfyTR6]
		const _arrayValueccyljv = undefined;
		const _graphC1ALax4 = [_arrayValuef1k6vDH, _arrayValueTQownD5, _arrayValuedp5zsI5, _arrayValueccyljv]
		const _returnValueycQ1avL = await graphBridges(_graphC1ALax4)
	});

	it('test for graphBridges', async () => {
		const _isDirectedT9hWxw7 = false;
		const _graphjOmOerA = new Graph(_isDirectedT9hWxw7)
		const _valueCeMsH6G = null;
		const _newVertexcidFBaT = new GraphVertex(_valueCeMsH6G)
		const _returnValue37vJQ8 = await _newVertexcidFBaT.getNeighbors()
		const _returnValueOd6WdHA = "jM4j33axhRQtrjjP1lBHKPvJQgGOHo";
		const _callbackyAElVwH = () => { return _returnValueOd6WdHA };
		const _returnValueU7fznJW = await _newVertexcidFBaT.toString(_callbackyAElVwH)
		const _returnValuenpYBXgj = await _newVertexcidFBaT.deleteAllEdges()
		const _returnValueTKN1eqn = await _newVertexcidFBaT.getNeighbors()
		const _returnValue6hl0vA = await _graphjOmOerA.addVertex(_newVertexcidFBaT)
		const _returnValuei25Y3ry = await graphBridges(_graphjOmOerA)
	});
})
export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueKWKUlzR = {
		
	}
		const _getAllVerticesiwkbtY = () => { return _returnValueKWKUlzR };
		const _returnValuePkodNm = undefined;
		const _findEdgeEdQggvI = () => { return _returnValuePkodNm };
		const _graphk2pS8jr = {
			"getAllVertices": _getAllVerticesiwkbtY,
		"findEdge": _findEdgeEdQggvI
	}
		const _returnValuerd9sp4s = await graphBridges(_graphk2pS8jr)
	});

	it('test for graphBridges', async () => {
		const _isDirectedpdC4TkX = true;
		const _graphztKwyp = new Graph(_isDirectedpdC4TkX)
		const _valueRzfbCg4 = -3.8684800650514637;
		const _returnValuet9ZcHWe = false;
		const _keyCallbackT0VYrc = () => { return _returnValuet9ZcHWe };
		const _newVertexhUxIyr = new DisjointSetItem(_valueRzfbCg4, _keyCallbackT0VYrc)
		const _returnValueX14aOmJ = await _newVertexhUxIyr.getRank()
		const _returnValuep3gtu02 = await _newVertexhUxIyr.getKey()
		const _returnValuewOVnsf2 = await _newVertexhUxIyr.getChildren()
		const _returnValueAEgRLq = await _newVertexhUxIyr.getRank()
		const _returnValueS61J7xC = await _graphztKwyp.addVertex(_newVertexhUxIyr)
		const _returnValue8Cvhen = await _graphztKwyp.getAllEdges()
		const _returnValueXARQHgu = await _graphztKwyp.getAllEdges()
		const _returnValuefc6ysg8 = await graphBridges(_graphztKwyp)
	});
})
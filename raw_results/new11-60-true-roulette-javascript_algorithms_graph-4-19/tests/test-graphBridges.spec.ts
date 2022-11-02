export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _returnValueAVCGPkj = undefined;
		const _graphLNIlFMv = () => { return _returnValueAVCGPkj };
		const _returnValue39mLp0 = await graphBridges(_graphLNIlFMv)
	});

	it('test for graphBridges', async () => {
		const _isDirectedEzeCHg = false;
		const _graphUsbEd3r = new Graph(_isDirectedEzeCHg)
		const _returnValueOWgAHsg = 9.569517428517983;
		const _getNeighborsdhSWIot = () => { return _returnValueOWgAHsg };
		const _vertexhTClEUd = {
			"getNeighbors": _getNeighborsdhSWIot
	}
		const _returnValuefMlPQVU = await _graphUsbEd3r.getNeighbors(_vertexhTClEUd)
		const _vertexKeyTT68Nhl = []
		const _returnValueQpvoKXF = await _graphUsbEd3r.getVertexByKey(_vertexKeyTT68Nhl)
		const _arrayValuepdjaaPI = false;
		const _valueKpw71Li = [_arrayValuepdjaaPI]
		const _returnValueedFfxGJ = 4.611047439337215;
		const _keyCallbackPYjz74b = () => { return _returnValueedFfxGJ };
		const _newVertexvh53c2 = new DisjointSetItem(_valueKpw71Li, _keyCallbackPYjz74b)
		const _returnValueq6sI6WE = await _newVertexvh53c2.isRoot()
		const _returnValueyLnujbS = await _graphUsbEd3r.addVertex(_newVertexvh53c2)
		const _valuepcQg1aE = true;
		const _startVertexwU8x66m = new GraphVertex(_valuepcQg1aE)
		const _returnValuepIKx0w3 = 2.7064948521847967;
		const _callbackxAL66pi = () => { return _returnValuepIKx0w3 };
		const _returnValueemgvSfS = await _startVertexwU8x66m.toString(_callbackxAL66pi)
		const _returnValueG4gwrWc = await _startVertexwU8x66m.getDegree()
		const _edgeWCC3mBi = undefined;
		const _returnValuek7QXtF8 = await _startVertexwU8x66m.addEdge(_edgeWCC3mBi)
		const _returnValuejR6OdDI = await _startVertexwU8x66m.getEdges()
		const _endVertexnt7qeuW = false;
		const _returnValuesMmf0fd = await _graphUsbEd3r.findEdge(_startVertexwU8x66m, _endVertexnt7qeuW)
		const _returnValueKa3LZP = await graphBridges(_graphUsbEd3r)
	});
})
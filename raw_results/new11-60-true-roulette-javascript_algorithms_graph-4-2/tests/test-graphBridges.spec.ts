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
		const _returnValueCAyXF4J = "VQdcB7h7xDjFH04";
		const _graphbYsDFxK = () => { return _returnValueCAyXF4J };
		const _returnValueY0WT8U2 = await graphBridges(_graphbYsDFxK)
	});

	it('test for graphBridges', async () => {
		const _isDirectedksx6gsn = true;
		const _graphu6BtLuW = new Graph(_isDirectedksx6gsn)
		const _returnValueyu8qRlt = await _graphu6BtLuW.getAdjacencyMatrix()
		const _arrayValuem0fBaD3 = "jvKr4rMQk";
		const _vertexKeyOXINuBb = [_arrayValuem0fBaD3]
		const _returnValued4JaQhX = await _graphu6BtLuW.getVertexByKey(_vertexKeyOXINuBb)
		const _returnValuedJanbtM = await _graphu6BtLuW.getVerticesIndices()
		const _arrayValueFZUTtby = []
		const _arrayValuePwaEHS6 = undefined;
		const _returnValueAlDetn = [_arrayValueFZUTtby, _arrayValuePwaEHS6]
		const _arrayValuenhyYUeJ = () => { return _returnValueAlDetn };
		const _arrayValueX8Lg2vD = true;
		const _arrayValuePtAkT4p = null;
		const _valueLV6Upmy = [_arrayValuenhyYUeJ, _arrayValueX8Lg2vD, _arrayValuePtAkT4p]
		const _returnValueQK325b7 = undefined;
		const _keyCallbackqsHY2DF = () => { return _returnValueQK325b7 };
		const _newVertexnGrpf97 = new DisjointSetItem(_valueLV6Upmy, _keyCallbackqsHY2DF)
		const _returnValueV3Z9JSf = await _newVertexnGrpf97.getKey()
		const _returnValueFfqy7x6 = await _newVertexnGrpf97.getChildren()
		const _returnValueu3RQTZ3 = await _graphu6BtLuW.addVertex(_newVertexnGrpf97)
		const _returnValueuJPaVgK = await graphBridges(_graphu6BtLuW)
	});
})
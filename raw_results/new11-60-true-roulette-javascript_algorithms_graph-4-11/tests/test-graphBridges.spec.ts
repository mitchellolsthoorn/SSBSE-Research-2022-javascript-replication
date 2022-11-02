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
		const _graphfbHN90 = "unkUxtUScVd";
		const _returnValueyuienw = await graphBridges(_graphfbHN90)
	});

	it('test for graphBridges', async () => {
		const _isDirectedqOwEg93 = true;
		const _graphIzfbPJ = new Graph(_isDirectedqOwEg93)
		const _arrayValuezBWRw6d = "1pWKiydAfP8CszsGjcv57QnwRlnt5bDddVfdEpcEyc7EkBA52";
		const _arrayValueX2l53mp = "ugRXgZaHgObbY5WV";
		const _arrayValueYRJctoB = {
		
	}
		const _returnValuecbNoZT9 = false;
		const _arrayValueHzzwfZM = () => { return _returnValuecbNoZT9 };
		const _valueqIChbvj = [_arrayValuezBWRw6d, _arrayValueX2l53mp, _arrayValueYRJctoB, _arrayValueHzzwfZM]
		const _newVertexBAvFZc2 = new GraphVertex(_valueqIChbvj)
		const _returnValueJJ9zEgj = null;
		const _callbackUbzmqPC = () => { return _returnValueJJ9zEgj };
		const _returnValueKlo6LQO = await _newVertexBAvFZc2.toString(_callbackUbzmqPC)
		const _returnValuesPwy0nj = await _newVertexBAvFZc2.getKey()
		const _vertexRwUXXFN = true;
		const _returnValuew6hqfBD = await _newVertexBAvFZc2.findEdge(_vertexRwUXXFN)
		const _returnValuelo2tBJb = await _newVertexBAvFZc2.getEdges()
		const _vertexcVLVbIo = 8.140992141574575;
		const _returnValueATa4ijx = await _newVertexBAvFZc2.findEdge(_vertexcVLVbIo)
		const _returnValueIWCPltU = await _graphIzfbPJ.addVertex(_newVertexBAvFZc2)
		const _returnValuel8e1kQB = await _graphIzfbPJ.toString()
		const _returnValueGMZfC8 = await graphBridges(_graphIzfbPJ)
	});
})
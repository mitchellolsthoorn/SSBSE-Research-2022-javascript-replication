export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedtxMp8Q4 = "D76BRUSCW2ncD57GFVa";
		const _returnValuejqqIGtL = "zchfuM6OV23nQUFNjG9e72sqWzSSMyNq4dYmVpfnRf45HuEIlMDzXreue917nL1tZjpJvUE1horVH";
		const _getAllVerticesAe28g7a = () => { return _returnValuejqqIGtL };
		const _graphsvcFi5Z = {
			"isDirected": _isDirectedtxMp8Q4,
		"getAllVertices": _getAllVerticesAe28g7a
	}
		const _returnValueGUEUqS = await prim(_graphsvcFi5Z)
	});

	it('test for prim', async () => {
		const _isDirectedHoccqND = false;
		const _graphVrShful = new Graph(_isDirectedHoccqND)
		const _returnValueUmRZ1i8 = await _graphVrShful.getAllVertices()
		const _vertexKeyaehvaMB = true;
		const _returnValuee2O7Xut = await _graphVrShful.getVertexByKey(_vertexKeyaehvaMB)
		const _valueHAHSeM5 = 3.267247992736076;
		const _returnValueKYGjVDZ = false;
		const _keyCallbackmA1dVza = () => { return _returnValueKYGjVDZ };
		const _newVertexhqiEzQd = new DisjointSetItem(_valueHAHSeM5, _keyCallbackmA1dVza)
		const _returnValuepII2mK8 = await _newVertexhqiEzQd.getRoot()
		const _returnValueq5EPhq2 = await _newVertexhqiEzQd.getKey()
		const _returnValueGg9mUzb = await _newVertexhqiEzQd.getChildren()
		const _returnValueGubSJDZ = await _newVertexhqiEzQd.getRoot()
		const _returnValueH9C9U35 = await _newVertexhqiEzQd.getChildren()
		const _returnValueWPaXQ0w = await _graphVrShful.addVertex(_newVertexhqiEzQd)
		const _returnValuewUlY6wu = await prim(_graphVrShful)
	});
})
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
		const _isDirectedUYoNxyO = undefined;
		const _returnValuek7KaVX = "zaf8f7TMcta7KGNXHJrZk7Q0cQh2z44RQag1cEsGZZGaYb8oLSmTz8m1Ef5voPxyticNenozAOj";
		const _getAllVerticesbR4PWTx = () => { return _returnValuek7KaVX };
		const _graphLHAvMqd = {
			"isDirected": _isDirectedUYoNxyO,
		"getAllVertices": _getAllVerticesbR4PWTx
	}
		const _returnValuelKH7jjy = await prim(_graphLHAvMqd)
	});

	it('test for prim', async () => {
		const _isDirectedoYA4s4F = true;
		const _returnValueNqsZ7GY = false;
		const _getAllVerticesUToJFmm = () => { return _returnValueNqsZ7GY };
		const _graphD9EtnBv = {
			"isDirected": _isDirectedoYA4s4F,
		"getAllVertices": _getAllVerticesUToJFmm
	}
		const _returnValuecyhDqw7 = await prim(_graphD9EtnBv)
	});

	it('test for prim', async () => {
		const _isDirectedhmQH00i = null;
		const _graphJOXKMKx = new Graph(_isDirectedhmQH00i)
		const _returnValueOqtco1b = await _graphJOXKMKx.getVerticesIndices()
		const _valueTbRUY31 = -0.7359143675973563;
		const _returnValuehvavCBY = {
		
	}
		const _keyCallbacku9vyp0w = () => { return _returnValuehvavCBY };
		const _newVertexKxZStRC = new DisjointSetItem(_valueTbRUY31, _keyCallbacku9vyp0w)
		const _returnValueCuEWkEK = await _newVertexKxZStRC.isRoot()
		const _returnValueci8rwDq = await _newVertexKxZStRC.getRoot()
		const _returnValue1QHNHv = await _graphJOXKMKx.addVertex(_newVertexKxZStRC)
		const _returnValueznZcnEj = await _graphJOXKMKx.getAllVertices()
		const _returnValuea3JIEmN = await _graphJOXKMKx.getAllVertices()
		const _returnValuem8VFTH = await prim(_graphJOXKMKx)
	});
})
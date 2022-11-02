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
		const _isDirectedKMuuL2S = null;
		const _returnValuecMdjz9w = false;
		const _getAllVertices9doCBF = () => { return _returnValuecMdjz9w };
		const _graphSkIvxSJ = {
			"isDirected": _isDirectedKMuuL2S,
		"getAllVertices": _getAllVertices9doCBF
	}
		const _returnValueyUbwBR4 = await prim(_graphSkIvxSJ)
	});

	it('test for prim', async () => {
		const _isDirectedy16hQ0j = {
		
	}
		const _returnValueU1PVUw9 = "YQo0nh";
		const _getAllVerticesYljQBNS = () => { return _returnValueU1PVUw9 };
		const _graphuu2mEgp = {
			"isDirected": _isDirectedy16hQ0j,
		"getAllVertices": _getAllVerticesYljQBNS
	}
		const _returnValuedCACY5 = await prim(_graphuu2mEgp)
	});

	it('test for prim', async () => {
		const _isDirectedlSdOSx1 = false;
		const _graphnQ5wypQ = new Graph(_isDirectedlSdOSx1)
		const _valuePMQvHlL = {
		
	}
		const _returnValuepR63D2 = undefined;
		const _keyCallbackFnalsUm = () => { return _returnValuepR63D2 };
		const _newVertexKJ5J2G1 = new DisjointSetItem(_valuePMQvHlL, _keyCallbackFnalsUm)
		const _returnValueI4kSOni = await _newVertexKJ5J2G1.isRoot()
		const _returnValueE1JS2KF = await _graphnQ5wypQ.addVertex(_newVertexKJ5J2G1)
		const _returnValueojzuZln = await prim(_graphnQ5wypQ)
	});
})
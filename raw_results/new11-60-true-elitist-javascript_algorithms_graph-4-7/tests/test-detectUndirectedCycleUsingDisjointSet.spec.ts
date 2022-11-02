export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueX1PrZJd = undefined;
		const _getAllVerticesVPNUnrL = () => { return _returnValueX1PrZJd };
		const _arrayValueC5LAZ5R = undefined;
		const _arrayValueMdTXmd = [_arrayValueC5LAZ5R]
		const _arrayValuermkGVtk = "Wbr45avRIgR2oFKqUw6JzqP6GOSnDpDdNHEkBrXGcWsaVILj91xDAsY6ifQj";
		const _arrayValueRRRMPWf = "CU92WPS3z3gxBm";
		const _getAllEdgesvr1ffUs = [_arrayValueMdTXmd, _arrayValuermkGVtk, _arrayValueRRRMPWf]
		const _graphehpgH5N = {
			"getAllVertices": _getAllVerticesVPNUnrL,
		"getAllEdges": _getAllEdgesvr1ffUs
	}
		const _returnValuebwJZpxo = await detectUndirectedCycleUsingDisjointSet(_graphehpgH5N)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedqBwypQk = false;
		const _graphtBHfJox = new Graph(_isDirectedqBwypQk)
		const _arrayValueseGaKLS = {
		
	}
		const _vertexKeysdU4l16 = [_arrayValueseGaKLS]
		const _returnValuet7LY85P = await _graphtBHfJox.getVertexByKey(_vertexKeysdU4l16)
		const _returnValueDHbNCnh = 8.190367026541058;
		const _valueoHtfcUL = () => { return _returnValueDHbNCnh };
		const _returnValueczzsHmF = true;
		const _keyCallbackn0AsOE = () => { return _returnValueczzsHmF };
		const _newVertexmtPcfSp = new DisjointSetItem(_valueoHtfcUL, _keyCallbackn0AsOE)
		const _returnValueDcSiHjB = await _newVertexmtPcfSp.isRoot()
		const _returnValuebyJab1u = await _graphtBHfJox.addVertex(_newVertexmtPcfSp)
		const _returnValuepsYxY0M = await detectUndirectedCycleUsingDisjointSet(_graphtBHfJox)
	});
})
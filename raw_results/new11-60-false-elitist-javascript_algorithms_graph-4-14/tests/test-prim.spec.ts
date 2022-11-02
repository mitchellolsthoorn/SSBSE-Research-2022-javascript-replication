export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedMXOWOX6 = undefined;
		const _returnValueNptYEBD = undefined;
		const _getAllVerticest1CD0IJ = () => { return _returnValueNptYEBD };
		const _graphMNVLPSc = {
			"isDirected": _isDirectedMXOWOX6,
		"getAllVertices": _getAllVerticest1CD0IJ
	}
		const _returnValuezeMILZ4 = await prim(_graphMNVLPSc)
	});

	it('test for prim', async () => {
		const _returnValueTEdutdu = undefined;
		const _isDirectedNJr91RD = () => { return _returnValueTEdutdu };
		const _returnValueyQU17Js = 5.043766176734142;
		const _getAllVerticesU2hNFTq = () => { return _returnValueyQU17Js };
		const _graphNwfA04r = {
			"isDirected": _isDirectedNJr91RD,
		"getAllVertices": _getAllVerticesU2hNFTq
	}
		const _returnValueGhwX7KN = await prim(_graphNwfA04r)
	});
})
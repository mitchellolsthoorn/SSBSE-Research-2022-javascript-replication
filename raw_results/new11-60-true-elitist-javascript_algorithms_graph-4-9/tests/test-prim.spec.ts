export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphlCQr4Q = 9.788921529351327;
		const _returnValuemtWHowT = await prim(_graphlCQr4Q)
	});

	it('test for prim', async () => {
		const _isDirectedmJriynT = {
		
	}
		const _returnValueLOSOpXX = undefined;
		const _getAllVerticesQXKThmz = () => { return _returnValueLOSOpXX };
		const _graphqey3RGA = {
			"isDirected": _isDirectedmJriynT,
		"getAllVertices": _getAllVerticesQXKThmz
	}
		const _returnValuerC5rJu = await prim(_graphqey3RGA)
	});

	it('test for prim', async () => {
		const _isDirectedycCwOOd = false;
		const _graphfOKm8rx = new Graph(_isDirectedycCwOOd)
		const _returnValueGK4mLcs = 8.6872923586062;
		const _getKeyQyyhzBI = () => { return _returnValueGK4mLcs };
		const _newVertexDwoDMU = {
			"getKey": _getKeyQyyhzBI
	}
		const _returnValueNoVR3I8 = await _graphfOKm8rx.addVertex(_newVertexDwoDMU)
		const _returnValuea4tJRZa = "biiaJvSsOtsUNuWImGgdAxlHrY2zAU52CqfmktUgSN5RbNPJP9S7T4f";
		const _getKeyUrY3vIa = () => { return _returnValuea4tJRZa };
		const _newVertexptzL7QN = {
			"getKey": _getKeyUrY3vIa
	}
		const _returnValue77bAJT = await _graphfOKm8rx.addVertex(_newVertexptzL7QN)
		const _returnValuePwdklDH = await prim(_graphfOKm8rx)
	});
})
export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedCuTKSQu = null;
		const _arrayValueRMeBH6Q = true;
		const _arrayValueMi2gQ7a = "JjYfOOi8JTmARPjzYPUOYstG9I3k4mhUCHNyr7LeMFAf";
		const _returnValueNPzyqVX = [_arrayValueRMeBH6Q, _arrayValueMi2gQ7a]
		const _getAllVerticesfuBPUdR = () => { return _returnValueNPzyqVX };
		const _graphyrS0dG = {
			"isDirected": _isDirectedCuTKSQu,
		"getAllVertices": _getAllVerticesfuBPUdR
	}
		const _returnValueebpkwO = await prim(_graphyrS0dG)
	});

	it('test for prim', async () => {
		const _isDirectedkmuKYF4 = {
		
	}
		const _returnValueAw30ZWr = 7.7384606435910115;
		const _getAllVerticesCMOBhgP = () => { return _returnValueAw30ZWr };
		const _graphBVEbE7N = {
			"isDirected": _isDirectedkmuKYF4,
		"getAllVertices": _getAllVerticesCMOBhgP
	}
		const _returnValueae4Ruv1 = await prim(_graphBVEbE7N)
	});

	it('test for prim', async () => {
		const _isDirectedVCpYxoF = false;
		const _graphMB18HoT = new Graph(_isDirectedVCpYxoF)
		const _arrayValueQ2rkR4K = null;
		const _returnValueupLrDiY = [_arrayValueQ2rkR4K]
		const _getKeybL1uaID = () => { return _returnValueupLrDiY };
		const _newVertexdtEbL12 = {
			"getKey": _getKeybL1uaID
	}
		const _returnValuewgaZ0KF = await _graphMB18HoT.addVertex(_newVertexdtEbL12)
		const _returnValueKmOEfr3 = await _graphMB18HoT.getWeight()
		const _returnValueVScbSYB = await prim(_graphMB18HoT)
	});
})
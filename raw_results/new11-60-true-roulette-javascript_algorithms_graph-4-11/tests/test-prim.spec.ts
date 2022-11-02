export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValuedIrT1Qe = false;
		const _isDirectedbTUAwAD = () => { return _returnValuedIrT1Qe };
		const _returnValueLLkpmGp = false;
		const _arrayValuet4oLiqA = () => { return _returnValueLLkpmGp };
		const _arrayValueZVVvbsH = -6.0592442720914885;
		const _arrayValueAgNk8H4 = false;
		const _arrayValueG1NiDSn = null;
		const _returnValues2iy08i = [_arrayValuet4oLiqA, _arrayValueZVVvbsH, _arrayValueAgNk8H4, _arrayValueG1NiDSn]
		const _getAllVerticeseV6fLmE = () => { return _returnValues2iy08i };
		const _graphNNyN0R1 = {
			"isDirected": _isDirectedbTUAwAD,
		"getAllVertices": _getAllVerticeseV6fLmE
	}
		const _returnValuePa1kcc4 = await prim(_graphNNyN0R1)
	});

	it('test for prim', async () => {
		const _isDirectediGsp9yK = false;
		const _graphO8KDwP = new Graph(_isDirectediGsp9yK)
		const _returnValuevzdtA8u = await _graphO8KDwP.reverse()
		const _returnValueh74cLQn = undefined;
		const _getKeygFgu08 = () => { return _returnValueh74cLQn };
		const _newVertexmAlBxcP = {
			"getKey": _getKeygFgu08
	}
		const _returnValuepbU7I3 = await _graphO8KDwP.addVertex(_newVertexmAlBxcP)
		const _returnValueaSrGm5 = await prim(_graphO8KDwP)
	});
})
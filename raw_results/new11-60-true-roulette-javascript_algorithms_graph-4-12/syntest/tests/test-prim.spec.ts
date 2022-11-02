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
		const _isDirectedeh0AoGw = "49mKVBln6ojbyA27dgBDxY8fOviDXj65RRKGudUgUfecGJeine6X8d0QkMekBjvk74kCoNddI30s36rEYRKhAflcSdwo4aLp62";
		const _returnValuerBKiccm = "rpf9uJAh9BAYoFKsYWU7ERhGcG4NCj3kmXMTp1gYCXEuhOoFPtW2r8Nu";
		const _getAllVerticesCEjIlX = () => { return _returnValuerBKiccm };
		const _graphiUKQkXT = {
			"isDirected": _isDirectedeh0AoGw,
		"getAllVertices": _getAllVerticesCEjIlX
	}
		const _returnValueZFi2eYs = await prim(_graphiUKQkXT)
	});

	it('test for prim', async () => {
		const _isDirectedkVzupV = false;
		const _graphVsRjxiK = new Graph(_isDirectedkVzupV)
		const _arrayValueej4zTNq = undefined;
		const _returnValueNXOyKx = [_arrayValueej4zTNq]
		const _arrayValueioTOKdM = () => { return _returnValueNXOyKx };
		const _arrayValuedgJKFzm = "jV6sJaGPLS4nJcZ9p7UW65mFqWmE7R";
		const _arrayValueiQWMWZT = -9.043843578162328;
		const _valueN0rk8Tu = [_arrayValueioTOKdM, _arrayValuedgJKFzm, _arrayValueiQWMWZT]
		const _returnValueJZ4YleJ = -7.357034977551665;
		const _keyCallbackjAgG0v = () => { return _returnValueJZ4YleJ };
		const _newVertexi5S7Pw = new DisjointSetItem(_valueN0rk8Tu, _keyCallbackjAgG0v)
		const _returnValueSy9ekth = await _newVertexi5S7Pw.getRoot()
		const _returnValueHPUhgVG = await _newVertexi5S7Pw.getRank()
		const _returnValuewocLjq = await _graphVsRjxiK.addVertex(_newVertexi5S7Pw)
		const _returnValueJaRGNlk = await prim(_graphVsRjxiK)
	});
})
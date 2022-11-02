export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuefjfjHj = null;
		const _getAllVerticesSwnJd6W = () => { return _returnValuefjfjHj };
		const _graphqMNID6s = {
			"getAllVertices": _getAllVerticesSwnJd6W
	}
		const _returnValuepjzz3nN = await articulationPoints(_graphqMNID6s)
	});

	it('test for articulationPoints', async () => {
		const _arrayValuewuaLt2P = undefined;
		const _isDirectedEvXBT9J = [_arrayValuewuaLt2P]
		const _graphtmuNYG5 = new Graph(_isDirectedEvXBT9J)
		const _returnValueu7ZkqUJ = await _graphtmuNYG5.getVerticesIndices()
		const _returnValueRn5jISz = await _graphtmuNYG5.getAllEdges()
		const _valueuD04u1p = false;
		const _arrayValuenYd0Qio = -4.781323311354267;
		const _arrayValueA1AjuMG = {
		
	}
		const _returnValueRteDXym = [_arrayValuenYd0Qio, _arrayValueA1AjuMG]
		const _keyCallbackiYvmFnK = () => { return _returnValueRteDXym };
		const _newVertexu3HzAq = new DisjointSetItem(_valueuD04u1p, _keyCallbackiYvmFnK)
		const _returnValueSRvCLGR = 9.976327611147262;
		const _addChildOSvvDmm = () => { return _returnValueSRvCLGR };
		const _parentItemIjWws4l = {
			"addChild": _addChildOSvvDmm
	}
		const _forceSettingParentChildR4rDB4X = false;
		const _returnValueRJh8atk = await _newVertexu3HzAq.setParent(_parentItemIjWws4l, _forceSettingParentChildR4rDB4X)
		const _returnValuecYcEct6 = await _newVertexu3HzAq.getChildren()
		const _returnValuediwrpYU = await _graphtmuNYG5.addVertex(_newVertexu3HzAq)
		const _returnValuechR7ZA1 = await articulationPoints(_graphtmuNYG5)
	});
})
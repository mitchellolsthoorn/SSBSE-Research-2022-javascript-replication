export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueHKeeZIq = undefined;
		const _grapheWWoXwW = () => { return _returnValueHKeeZIq };
		const _returnValue6cozjO = await prim(_grapheWWoXwW)
	});

	it('test for prim', async () => {
		const _isDirectedo0IUaz = 0.6285268996163538;
		const _returnValuepWyPsFD = -2.039782555396359;
		const _getAllVerticesqSqJbw2 = () => { return _returnValuepWyPsFD };
		const _graphRlPsMv0 = {
			"isDirected": _isDirectedo0IUaz,
		"getAllVertices": _getAllVerticesqSqJbw2
	}
		const _returnValuejT0zX57 = await prim(_graphRlPsMv0)
	});

	it('test for prim', async () => {
		const _isDirectedfbdLwjf = false;
		const _graphuneu5df = new Graph(_isDirectedfbdLwjf)
		const _returnValueSJzL3Fx = await _graphuneu5df.getVerticesIndices()
		const _valueSm16yS8 = 9.180494512094175;
		const _returnValuewpgrnHI = false;
		const _keyCallbackbbXfLmz = () => { return _returnValuewpgrnHI };
		const _newVertexduauj8 = new DisjointSetItem(_valueSm16yS8, _keyCallbackbbXfLmz)
		const _returnValuenUpoeJc = await _newVertexduauj8.getChildren()
		const _returnValueYnbyDfy = await _newVertexduauj8.getChildren()
		const _returnValueUBgePAT = -3.3584649750273705;
		const _addChildbKEt9Fd = () => { return _returnValueUBgePAT };
		const _parentItemvtgqakC = {
			"addChild": _addChildbKEt9Fd
	}
		const _forceSettingParentChildPs0SdGU = true;
		const _returnValueDsrrZcC = await _newVertexduauj8.setParent(_parentItemvtgqakC, _forceSettingParentChildPs0SdGU)
		const _returnValuewYlaplE = await _newVertexduauj8.getKey()
		const _returnValueTcmXiE0 = await _graphuneu5df.addVertex(_newVertexduauj8)
		const _returnValuek3tswO = await prim(_graphuneu5df)
	});

	it('test for prim', async () => {
		const _isDirectedDjHpSQB = false;
		const _graphJE471wy = new Graph(_isDirectedDjHpSQB)
		const _returnValuebXOaf05 = await _graphJE471wy.getWeight()
		const _returnValueIBTko3R = await _graphJE471wy.getAllVertices()
		const _valuezXYxbY7 = 8.214693126821686;
		const _newVertexsF2Xw5N = new GraphVertex(_valuezXYxbY7)
		const _returnValuesf5OXc = await _newVertexsF2Xw5N.getEdges()
		const _returnValueIQZRxuu = await _newVertexsF2Xw5N.getEdges()
		const _returnValueddoPxlg = await _newVertexsF2Xw5N.getEdges()
		const _returnValueEWN64wq = await _graphJE471wy.addVertex(_newVertexsF2Xw5N)
		const _returnValueuKcwarg = await prim(_graphJE471wy)
	});
})
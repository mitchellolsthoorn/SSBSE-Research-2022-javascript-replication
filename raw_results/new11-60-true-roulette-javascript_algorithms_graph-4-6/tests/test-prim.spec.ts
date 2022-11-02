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
		const _returnValuesv855Qr = 1.0545809781225763;
		const _graphcjpNuZe = () => { return _returnValuesv855Qr };
		const _returnValueZuFINE2 = await prim(_graphcjpNuZe)
	});

	it('test for prim', async () => {
		const _returnValueNd561yk = null;
		const _arrayValuewrNfOut = () => { return _returnValueNd561yk };
		const _arrayValuewUb44z2 = "OfD0ayN";
		const _arrayValuereRelMU = undefined;
		const _arrayValuetnX77cu = {
		
	}
		const _isDirectedZqkQY8h = [_arrayValuewrNfOut, _arrayValuewUb44z2, _arrayValuereRelMU, _arrayValuetnX77cu]
		const _returnValuegpV7nuA = undefined;
		const _getAllVerticesu1poP8 = () => { return _returnValuegpV7nuA };
		const _graphRZCTwt = {
			"isDirected": _isDirectedZqkQY8h,
		"getAllVertices": _getAllVerticesu1poP8
	}
		const _returnValuefLBnoWz = await prim(_graphRZCTwt)
	});

	it('test for prim', async () => {
		const _isDirectedPY6F79n = false;
		const _graphFAXj702 = new Graph(_isDirectedPY6F79n)
		const _returnValuem13vBow = await _graphFAXj702.toString()
		const _valueFHsdu66 = null;
		const _returnValueJx5AJQC = -2.3342041205171684;
		const _keyCallbacky0f2ioZ = () => { return _returnValueJx5AJQC };
		const _newVertexDRaZrCy = new DisjointSetItem(_valueFHsdu66, _keyCallbacky0f2ioZ)
		const _returnValueui54OlD = await _newVertexDRaZrCy.getKey()
		const _returnValuewa05AVB = await _newVertexDRaZrCy.getChildren()
		const _returnValueNZyLEB = await _newVertexDRaZrCy.isRoot()
		const _returnValuecmetfM = await _newVertexDRaZrCy.getRoot()
		const _returnValueKtQoUBX = await _newVertexDRaZrCy.getChildren()
		const _returnValueRP0rmDL = await _graphFAXj702.addVertex(_newVertexDRaZrCy)
		const _returnValueUNBIbXC = await _graphFAXj702.getAllEdges()
		const _returnValuet62tgY = await _graphFAXj702.getVerticesIndices()
		const _returnValueTw40aAS = await _graphFAXj702.getVerticesIndices()
		const _returnValueT5ePNiH = await prim(_graphFAXj702)
	});
})
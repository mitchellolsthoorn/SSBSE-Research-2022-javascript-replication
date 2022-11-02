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
		const _isDirectedQXkTOZr = null;
		const _returnValuepv4ukT = false;
		const _getAllVerticesFtwXKCq = () => { return _returnValuepv4ukT };
		const _graphi6lLCG = {
			"isDirected": _isDirectedQXkTOZr,
		"getAllVertices": _getAllVerticesFtwXKCq
	}
		const _returnValueeQLmljD = await prim(_graphi6lLCG)
	});

	it('test for prim', async () => {
		const _isDirectedByxy2bx = "D3MOgzhMp5RUSf0PPz8D8fbdkL0maZVQ7DUSx27nSLUQV9OKdGh8TEtv";
		const _returnValueUrmd0PL = false;
		const _getAllVerticesW2wsvB6 = () => { return _returnValueUrmd0PL };
		const _graphsZg2i8 = {
			"isDirected": _isDirectedByxy2bx,
		"getAllVertices": _getAllVerticesW2wsvB6
	}
		const _returnValueMqqfv2E = await prim(_graphsZg2i8)
	});

	it('test for prim', async () => {
		const _isDirectedepibDmk = false;
		const _graphEh23sxo = new Graph(_isDirectedepibDmk)
		const _valueUdLsoLe = null;
		const _returnValuer2MJurd = "xaxcAFFh9isH3JLmNdfjfjrXdTMCP0ychQNTQAY4obXd8S6qSt";
		const _keyCallbackJ8webdO = () => { return _returnValuer2MJurd };
		const _newVertexr9XapoE = new DisjointSetItem(_valueUdLsoLe, _keyCallbackJ8webdO)
		const _valueXzM7Pil = null;
		const _returnValuemg82VNG = "SxQJQEY4WER5GbXMVZXDoYYt6UNeYHJwMbfpguJU4bFeM7sTcOcuWWu4WefnspGW4tkNXZqGl6";
		const _keyCallbackXzaN6i5 = () => { return _returnValuemg82VNG };
		const _parentItemDr2jMTv = new DisjointSetItem(_valueXzM7Pil, _keyCallbackXzaN6i5)
		const _returnValueIq7Qs5L = await _parentItemDr2jMTv.getChildren()
		const _returnValueNrTfXgn = await _parentItemDr2jMTv.getRoot()
		const _returnValuem4k7dFS = await _parentItemDr2jMTv.getRoot()
		const _forceSettingParentChildgfEWprW = true;
		const _returnValuePurHT15 = await _newVertexr9XapoE.setParent(_parentItemDr2jMTv, _forceSettingParentChildgfEWprW)
		const _returnValuebUYgRYV = await _newVertexr9XapoE.getChildren()
		const _returnValuetwWoSvq = await _graphEh23sxo.addVertex(_newVertexr9XapoE)
		const _returnValuexf2LvEG = "EUv7NXPWXAnG";
		const _getNeighborsmHPNzy1 = () => { return _returnValuexf2LvEG };
		const _vertexClerVBJ = {
			"getNeighbors": _getNeighborsmHPNzy1
	}
		const _returnValuese6Gjt9 = await _graphEh23sxo.getNeighbors(_vertexClerVBJ)
		const _returnValueWUbyH1W = await prim(_graphEh23sxo)
	});
})
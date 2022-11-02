export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueeqhvLVE = true;
		const _graphGCQhqfp = () => { return _returnValueeqhvLVE };
		const _startVertexu9xm6Ps = "sshVJPNkoJXJTL69QCq9cUCf7hmIIeZ4o";
		const _returnValueQR3bGs4 = await bellmanFord(_graphGCQhqfp, _startVertexu9xm6Ps)
	});

	it('test for bellmanFord', async () => {
		const _returnValueeazr8pS = false;
		const _graphn8AtY34 = () => { return _returnValueeazr8pS };
		const _value7rlN7i = "HYyAC579DJPrnB";
		const _arrayValueUjWZ5me = "NE13upfUxiJQBtH1fpeVuCdpiQTtFiUcON36LE60KzdVOVF54cF7ZgibpvF37QDo2WZZRayjxEykayqmEXJ6IYG8cQGQ3mLD";
		const _returnValueojIlhX1 = [_arrayValueUjWZ5me]
		const _keyCallbackVlGCEEk = () => { return _returnValueojIlhX1 };
		const _startVertexSN5ueN4 = new DisjointSetItem(_value7rlN7i, _keyCallbackVlGCEEk)
		const _returnValueOBBkzEg = 9.601291117540356;
		const _addChildOYuPrt5 = () => { return _returnValueOBBkzEg };
		const _parentItemxmdstfP = {
			"addChild": _addChildOYuPrt5
	}
		const _forceSettingParentChildWwifqZM = true;
		const _returnValuee6TTas5 = await _startVertexSN5ueN4.setParent(_parentItemxmdstfP, _forceSettingParentChildWwifqZM)
		const _returnValueG1fjjf7 = await _startVertexSN5ueN4.getChildren()
		const _returnValueC6aYtu = await bellmanFord(_graphn8AtY34, _startVertexSN5ueN4)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedzaHo97 = true;
		const _graphatKx5k = new Graph(_isDirectedzaHo97)
		const _returnValuey8DOL2l = await _graphatKx5k.reverse()
		const _returnValueYxuMvB3 = await _graphatKx5k.getAdjacencyMatrix()
		const _values2atdbF = undefined;
		const _keyCallbackGUmYiqH = null;
		const _startVertextbOPvjw = new DisjointSetItem(_values2atdbF, _keyCallbackGUmYiqH)
		const _returnValueGxTV0ft = await _startVertextbOPvjw.getRank()
		const _returnValuerjqk3iy = await _startVertextbOPvjw.getRank()
		const _returnValuerAHO4eE = await bellmanFord(_graphatKx5k, _startVertextbOPvjw)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedjjdD4hf = false;
		const _graphLx3nq2B = new Graph(_isDirectedjjdD4hf)
		const _returnValueWDV9DQM = await _graphLx3nq2B.reverse()
		const _value6haZnB = null;
		const _returnValueBl4x7pr = true;
		const _keyCallbackIpx8CX = () => { return _returnValueBl4x7pr };
		const _newVertexFmAEGwo = new DisjointSetItem(_value6haZnB, _keyCallbackIpx8CX)
		const _returnValuej4VBj7 = await _newVertexFmAEGwo.isRoot()
		const _returnValueDZdmHIo = await _newVertexFmAEGwo.getRoot()
		const _returnValueDpEIN1W = await _newVertexFmAEGwo.getKey()
		const _returnValuezUC73Mi = await _graphLx3nq2B.addVertex(_newVertexFmAEGwo)
		const _returnValuezclvO79 = await _graphLx3nq2B.getVerticesIndices()
		const _returnValuetY96Kpd = undefined;
		const _getKeyUIHpUP = () => { return _returnValuetY96Kpd };
		const _startVertexq7G5P9k = {
			"getKey": _getKeyUIHpUP
	}
		const _returnValuemM5tRfG = await bellmanFord(_graphLx3nq2B, _startVertexq7G5P9k)
	});
})
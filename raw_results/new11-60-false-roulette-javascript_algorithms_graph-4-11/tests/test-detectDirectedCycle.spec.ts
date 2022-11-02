export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _returnValueEwIGU8V = null;
		const _getAllVerticesV05E3HK = () => { return _returnValueEwIGU8V };
		const _graphKU338Gs = {
			"getAllVertices": _getAllVerticesV05E3HK
	}
		const _returnValuecWhbKTb = await detectDirectedCycle(_graphKU338Gs)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedTyu5AvB = "3s8iapydVXs6DInx1w";
		const _graphoFlq0Uv = new Graph(_isDirectedTyu5AvB)
		const _returnValueuI5rMdz = await _graphoFlq0Uv.reverse()
		const _returnValueV0Toexn = await _graphoFlq0Uv.getAllVertices()
		const _returnValuezcoGwGI = await _graphoFlq0Uv.toString()
		const _returnValueLr3slvs = await _graphoFlq0Uv.getWeight()
		const _returnValuepnTDcD = await _graphoFlq0Uv.getVerticesIndices()
		const _returnValueRHLk4v1 = await detectDirectedCycle(_graphoFlq0Uv)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedz1PFT5i = "D76jmUpU8JK9ysaQlEY2878au83";
		const _graphVguiRhx = new Graph(_isDirectedz1PFT5i)
		const _valueTuKNH8z = undefined;
		const _returnValuefzzDDo4 = "";
		const _keyCallbackssryuNq = () => { return _returnValuefzzDDo4 };
		const _newVertexRe2fDDw = new DisjointSetItem(_valueTuKNH8z, _keyCallbackssryuNq)
		const _returnValueUGiAKwf = await _newVertexRe2fDDw.getRoot()
		const _returnValueoCFb3SV = await _newVertexRe2fDDw.isRoot()
		const _returnValuelaHD7Do = await _newVertexRe2fDDw.getKey()
		const _returnValueXOeSSjo = await _newVertexRe2fDDw.getChildren()
		const _returnValueLC3HOEp = await _graphVguiRhx.addVertex(_newVertexRe2fDDw)
		const _returnValuePZyx1Xc = await _graphVguiRhx.getVerticesIndices()
		const _returnValueDEYQuMC = await detectDirectedCycle(_graphVguiRhx)
	});
})
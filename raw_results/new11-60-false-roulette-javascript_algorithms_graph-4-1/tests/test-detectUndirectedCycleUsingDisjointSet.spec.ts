export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuep7EOazs = -6.6217859038053835;
		const _graphlerYoD7 = () => { return _returnValuep7EOazs };
		const _returnValueCAeEuWy = await detectUndirectedCycleUsingDisjointSet(_graphlerYoD7)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedltvxMkh = false;
		const _graphz0PbQ4i = new Graph(_isDirectedltvxMkh)
		const _returnValuef2a3lEb = await _graphz0PbQ4i.getAllVertices()
		const _returnValuecIZSPk5 = await _graphz0PbQ4i.reverse()
		const _returnValueiC3p0rM = await _graphz0PbQ4i.getVerticesIndices()
		const _returnValueVl4vE1Z = await detectUndirectedCycleUsingDisjointSet(_graphz0PbQ4i)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueq2VQwnD = []
		const _getAllVerticestinkaQ = () => { return _returnValueq2VQwnD };
		const _arrayValuel6CtjeS = undefined;
		const _arrayValuetwRH6k = true;
		const _arrayValue9YSeFd = {
		
	}
		const _arrayValueW4Gqlfj = null;
		const _arrayValueKv1uoAL = [_arrayValuel6CtjeS, _arrayValuetwRH6k, _arrayValue9YSeFd, _arrayValueW4Gqlfj]
		const _arrayValueCxlsKtG = undefined;
		const _returnValuejezlIpD = [_arrayValueKv1uoAL, _arrayValueCxlsKtG]
		const _getAllEdgesoE819bS = () => { return _returnValuejezlIpD };
		const _grapha6ow3m5 = {
			"getAllVertices": _getAllVerticestinkaQ,
		"getAllEdges": _getAllEdgesoE819bS
	}
		const _returnValuen9SspYw = await detectUndirectedCycleUsingDisjointSet(_grapha6ow3m5)
	});
})
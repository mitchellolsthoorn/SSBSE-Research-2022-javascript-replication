export {}
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirecteduhpAMrq = true;
		const _graphuEvw4F1 = new Graph(_isDirecteduhpAMrq)
		const _returnValueX9g1EE4 = await _graphuEvw4F1.getAllEdges()
		const _returnValuef4Gr6za = await _graphuEvw4F1.getWeight()
		const _returnValuexH74vvj = await _graphuEvw4F1.getAdjacencyMatrix()
		const _returnValuecVLoXpo = await _graphuEvw4F1.getAllVertices()
		const _returnValueV80oX2x = await detectUndirectedCycleUsingDisjointSet(_graphuEvw4F1)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueFvGnQW2 = []
		const _getAllVerticeszQeOLHr = () => { return _returnValueFvGnQW2 };
		const _arrayValueprXPzMz = false;
		const _arrayValueEaF2swY = null;
		const _arrayValueGUBYcUb = [_arrayValueprXPzMz, _arrayValueEaF2swY]
		const _returnValuepYHpYLv = false;
		const _arrayValueALSuWL = () => { return _returnValuepYHpYLv };
		const _arrayValuek053KLL = undefined;
		const _returnValuedAJKVBQ = [_arrayValueGUBYcUb, _arrayValueALSuWL, _arrayValuek053KLL]
		const _getAllEdgesb2KBMZB = () => { return _returnValuedAJKVBQ };
		const _graphFd3uuj = {
			"getAllVertices": _getAllVerticeszQeOLHr,
		"getAllEdges": _getAllEdgesb2KBMZB
	}
		const _returnValueHDXqAzQ = await detectUndirectedCycleUsingDisjointSet(_graphFd3uuj)
	});
})
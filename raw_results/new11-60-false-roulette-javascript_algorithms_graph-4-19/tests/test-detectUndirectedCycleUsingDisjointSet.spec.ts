export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueBw2cPyZ = true;
		const _returnValueNZ517j = () => { return _returnValueBw2cPyZ };
		const _returnValuea4m3XyJ = () => { return _returnValueNZ517j };
		const _getAllVerticesWL1aDI = () => { return _returnValuea4m3XyJ };
		const _arrayValueLph6fs4 = 7.560492630090302;
		const _arrayValueKxR92CJ = undefined;
		const _arrayValuefOJDCf5 = [_arrayValueKxR92CJ]
		const _arrayValuexVzl5YU = -5.754555851312873;
		const _returnValueqprwTTI = [_arrayValueLph6fs4, _arrayValuefOJDCf5, _arrayValuexVzl5YU]
		const _getAllEdgesG9Vl7kU = () => { return _returnValueqprwTTI };
		const _graphhRQ7gDo = {
			"getAllVertices": _getAllVerticesWL1aDI,
		"getAllEdges": _getAllEdgesG9Vl7kU
	}
		const _returnValueBeUbJJL = await detectUndirectedCycleUsingDisjointSet(_graphhRQ7gDo)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedyTVTRM6 = true;
		const _graphrjMf9yS = new Graph(_isDirectedyTVTRM6)
		const _returnValueNusWvx = await _graphrjMf9yS.getAllVertices()
		const _returnValueOR7hUa = await _graphrjMf9yS.getAdjacencyMatrix()
		const _returnValuenqrHHaC = await detectUndirectedCycleUsingDisjointSet(_graphrjMf9yS)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuefi9tbRs = []
		const _getAllVerticess24vmjk = () => { return _returnValuefi9tbRs };
		const _arrayValueMZa6A5A = "wPcGetUTisn7J2CAvoZVL4ofoTRajN3HRRkguzdT0pqu8ena95Rw7KIoS9ODcOyoJi20ldbHTREfug9AWVVjtG2s9N";
		const _returnValuevqbHwq0 = [_arrayValueMZa6A5A]
		const _getAllEdgesM6bBqLn = () => { return _returnValuevqbHwq0 };
		const _grapheqa2gti = {
			"getAllVertices": _getAllVerticess24vmjk,
		"getAllEdges": _getAllEdgesM6bBqLn
	}
		const _returnValuekaDkgg0 = await detectUndirectedCycleUsingDisjointSet(_grapheqa2gti)
	});
})
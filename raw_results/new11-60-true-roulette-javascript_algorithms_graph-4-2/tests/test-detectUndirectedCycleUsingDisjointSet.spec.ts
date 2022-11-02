export {}
import detectUndirectedCycleUsingDisjointSet from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectUndirectedCycleUsingDisjointSet.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('detectUndirectedCycleUsingDisjointSet', () => {
	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValueRlHp0CM = false;
		const _getAllVerticesO0oaoow = () => { return _returnValueRlHp0CM };
		const _arrayValueWUbunkX = undefined;
		const _arrayValueZ5Vjpb4 = "oXyKSWFyHTLcQ8Fn6nOl64bXBmfOvD4TGWdd92bAQXOJGUT";
		const _arrayValueg4XTlC = {
		
	}
		const _returnValueAoNkoJC = [_arrayValueWUbunkX, _arrayValueZ5Vjpb4, _arrayValueg4XTlC]
		const _getAllEdgesKjtTaGM = () => { return _returnValueAoNkoJC };
		const _graphLdu2x96 = {
			"getAllVertices": _getAllVerticesO0oaoow,
		"getAllEdges": _getAllEdgesKjtTaGM
	}
		const _returnValueMkKgtcb = await detectUndirectedCycleUsingDisjointSet(_graphLdu2x96)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _isDirectedwBShxu = false;
		const _graphPC8KKqv = new Graph(_isDirectedwBShxu)
		const _returnValuepowfa2L = await _graphPC8KKqv.reverse()
		const _returnValueMfu2SIV = 1.4284228751151407;
		const _getNeighborsK7BTlHn = () => { return _returnValueMfu2SIV };
		const _vertexGI85m9J = {
			"getNeighbors": _getNeighborsK7BTlHn
	}
		const _returnValuezn4w1rO = await _graphPC8KKqv.getNeighbors(_vertexGI85m9J)
		const _returnValueMguoAzv = await detectUndirectedCycleUsingDisjointSet(_graphPC8KKqv)
	});

	it('test for detectUndirectedCycleUsingDisjointSet', async () => {
		const _returnValuevbW7hEw = []
		const _getAllVerticeswGF2Ipv = () => { return _returnValuevbW7hEw };
		const _arrayValueyh2Js2B = "bZko1gqdfhCqTK6u4GHphLkiHUu";
		const _returnValuevEJh90X = [_arrayValueyh2Js2B]
		const _getAllEdgesIHvbCD7 = () => { return _returnValuevEJh90X };
		const _graphu4XURX = {
			"getAllVertices": _getAllVerticeswGF2Ipv,
		"getAllEdges": _getAllEdgesIHvbCD7
	}
		const _returnValuenZtsbjE = await detectUndirectedCycleUsingDisjointSet(_graphu4XURX)
	});
})